using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Reactive.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Threading;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Workstation.ServiceModel.Ua;
using Workstation.ServiceModel.Ua.Channels;

namespace BeerProduction.OPC
{
    public sealed class OpcStart
    {
        private static  OpcStart instance = null;
        private static readonly object padlock = new object();
        private static string discoveryUrl = $"opc.tcp://localhost:4840";
        private CancellationTokenSource cts = new CancellationTokenSource();

        public static OpcStart Instance
        {
            get
            {
                lock (padlock)
                {
                    if (instance != null) return instance;
                    instance = new OpcStart();
                    return instance;

                }
            }
        }

        private OpcStart()
        {
            Task.Run(() => ReadSubscribed(cts.Token));
        }

        #region OPC generic methods

        public void ReadSubscribedClose()
        {
            cts.Cancel();
        }

        public static int prodProc { get; set; }

        public static async Task ReadSubscribed(CancellationToken token = default(CancellationToken))
        {
            {
                var cycleTime = 1000;

                // setup logger
                var loggerFactory = new LoggerFactory();
                loggerFactory.AddConsole(LogLevel.Information);
                //var logger = loggerFactory?.CreateLogger<Program>();

                // Describe this app.
                var appDescription = new ApplicationDescription()
                {
                    ApplicationName = "DataLoggingConsole",
                    ApplicationUri = $"urn:{System.Net.Dns.GetHostName()}:DataLoggingConsole",
                    ApplicationType = ApplicationType.Client,
                };

                // Create a certificate store on disk.
                var certificateStore = new DirectoryStore(
                    Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "DataLoggingConsole", "pki"));

                // Create array of NodeIds to log.
                while (!token.IsCancellationRequested)
                {
                    try
                    {
                        // Discover endpoints.
                        var getEndpointsRequest = new GetEndpointsRequest
                        {
                            EndpointUrl = discoveryUrl,
                            ProfileUris = new[] {TransportProfileUris.UaTcpTransport}
                        };
                        var getEndpointsResponse = await UaTcpDiscoveryService.GetEndpointsAsync(getEndpointsRequest)
                            .ConfigureAwait(false);
                        if (getEndpointsResponse.Endpoints == null || getEndpointsResponse.Endpoints.Length == 0)
                        {
                            throw new InvalidOperationException($"'{discoveryUrl}' returned no endpoints.");
                        }

                        // Choose the endpoint with highest security level.
                        var remoteEndpoint = getEndpointsResponse.Endpoints.OrderBy(e => e.SecurityLevel).Last();

                        // Create a session with the server.
                        var channel = new UaTcpSessionChannel(appDescription, certificateStore,
                            async e => GetIUserIdentity(remoteEndpoint).GetAwaiter().GetResult(),
                            remoteEndpoint, loggerFactory);
                        try
                        {
                            await channel.OpenAsync();

                            var subscriptionRequest = new CreateSubscriptionRequest
                            {
                                RequestedPublishingInterval = 1000,
                                RequestedMaxKeepAliveCount = 10,
                                RequestedLifetimeCount = 30,
                                PublishingEnabled = true
                            };
                            var subscriptionResponse = await channel.CreateSubscriptionAsync(subscriptionRequest);
                            var id = subscriptionResponse.SubscriptionId;

                            var itemsToCreate = new MonitoredItemCreateRequest[]
                            {
                                new MonitoredItemCreateRequest
                                {
                                    ItemToMonitor = new ReadValueId
                                        {NodeId = NodeId.Parse("ns=6;s=::Program:Cube.Admin.ProdProcessedCount"), AttributeId = AttributeIds.Value},
                                    MonitoringMode = MonitoringMode.Reporting,
                                    RequestedParameters = new MonitoringParameters
                                    {
                                        ClientHandle = 1, SamplingInterval = -1, QueueSize = 0, DiscardOldest = true
                                    }
                                },
                            };
                            var itemsRequest = new CreateMonitoredItemsRequest
                            {
                                SubscriptionId = id,
                                ItemsToCreate = itemsToCreate,
                            };
                            var itemsResponse = await channel.CreateMonitoredItemsAsync(itemsRequest);

                            var subToken = channel.Where(pr => pr.SubscriptionId == id).Subscribe(pr =>
                            {
                                // loop thru all the data change notifications
                                var dcns = pr.NotificationMessage.NotificationData.OfType<DataChangeNotification>();
                                foreach (var dcn in dcns)
                                {   
                                    foreach (var min in dcn.MonitoredItems)
                                    {
                                        prodProc = (int) min.Value.Value;
                                    }
                                }
                            });

                            while (!token.IsCancellationRequested)
                            {
                                await Task.Delay(500);
                            }
                        }
                        catch
                        {
                        }
                    }
                    catch (Exception ex)
                    {
                        
                    }

                    //try
                    //{
                    //    await Task.Delay(cycleTime, token);
                    //}
                    //catch
                    //{
                    //}
                }
            }
     }

        private static async Task Write(List<NodeId> nodesIds, DataValue dataval )
        {
            // setup logger
            var loggerFactory = new LoggerFactory();
            loggerFactory.AddDebug(LogLevel.Debug);

            // Describe this app.
            var appDescription = new ApplicationDescription()
            {
                ApplicationName = "DataLoggingConsole",
                ApplicationUri = $"urn:{System.Net.Dns.GetHostName()}:DataLoggingConsole",
                ApplicationType = ApplicationType.Client,
            };

            // Create a certificate store on disk.
            var certificateStore = new DirectoryStore(
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "DataLoggingConsole", "pki"));

            // Create array of NodeIds to log.
            var nodeIds = nodesIds.ToArray();
                try
                {
                    // Discover endpoints.
                    var getEndpointsRequest = new GetEndpointsRequest
                    {
                        EndpointUrl = discoveryUrl,
                        ProfileUris = new[] { TransportProfileUris.UaTcpTransport }
                    };
                    var getEndpointsResponse = await UaTcpDiscoveryService.GetEndpointsAsync(getEndpointsRequest).ConfigureAwait(false);
                    if (getEndpointsResponse.Endpoints == null || getEndpointsResponse.Endpoints.Length == 0)
                    {
                        throw new InvalidOperationException($"'{discoveryUrl}' returned no endpoints.");
                    }

                    // Choose the endpoint with highest security level.
                    var remoteEndpoint = getEndpointsResponse.Endpoints.OrderBy(e => e.SecurityLevel).Last();
                    // Create a session with the server.
                    var session = new UaTcpSessionChannel(appDescription, certificateStore, async e => GetIUserIdentity(remoteEndpoint).GetAwaiter().GetResult(), remoteEndpoint, loggerFactory);
                    try
                    {
                        await session.OpenAsync();

                        RegisterNodesResponse registerNodesResponse = null;

                        if (true) // True registers the nodeIds to improve performance of the server.
                        {
                            // Register array of nodes to read.
                            var registerNodesRequest = new RegisterNodesRequest
                            {
                                NodesToRegister = nodeIds
                            };
                            registerNodesResponse = await session.RegisterNodesAsync(registerNodesRequest);
                        }

                     WriteRequest writeRequest = new WriteRequest();
                        writeRequest.NodesToWrite = new WriteValue[1]
                        {
                            new WriteValue()
                            {
                                NodeId = nodeIds[0],
                                AttributeId = AttributeIds.Value,
                                Value = dataval
                            }
                        };
                        WriteRequest request = writeRequest;
                        StatusCode statusCode;
                    // write the nodes.
                    statusCode = (await session.WriteAsync(request).ConfigureAwait(false)).Results[0]; ;


                    }
                    catch
                    {
                        await session.AbortAsync();
                        throw;
                    }
                    await session.CloseAsync();
                }

            catch (Exception e)
                {
                    // ignored
                }
        }

        private static async Task<IUserIdentity> GetIUserIdentity(EndpointDescription remoteEndpoint)
        {
            // Choose a User Identity.
            IUserIdentity userIdentity = null;
            if (remoteEndpoint.UserIdentityTokens.Any(p => p.TokenType == UserTokenType.Anonymous))
            {
                userIdentity = new AnonymousIdentity();
            }
            else if (remoteEndpoint.UserIdentityTokens.Any(p => p.TokenType == UserTokenType.UserName))
            {
                // If a username / password is requested, provide from .config file.
                userIdentity = new UserNameIdentity("sdu", "1234");
            }
            else
            {
                throw new InvalidOperationException("Server must accept Anonymous or UserName identity.");
            }

            return userIdentity;
        }

        #endregion

        public bool SetCntrlCmd(Int32 data)
        {
            try
            {
                List<NodeId> nodeIds = new List<NodeId> { NodeId.Parse("ns=6;s=::Program:Cube.Command.CntrlCmd") /*CntrlCmd*/};
                DataValue val = new DataValue(new Variant(data));
                Write(nodeIds, val).Start();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public bool SetCmdChangeRequest(Boolean data)
        {
            try
            {
                List<NodeId> nodeIds = new List<NodeId> { NodeId.Parse("ns=6;s=::Program:Cube.Command.CmdChangeRequest") /*CmdChangeRequest*/};
                DataValue val = new DataValue(new Variant(data).Type == VariantType.Boolean);
                Write(nodeIds, val).Start();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
        public bool SetBatchID(Int32 data)
        {
            try
            {
                List<NodeId> nodeIds = new List<NodeId> { NodeId.Parse("ns=6;s=::Program:Cube.Command.Parameter.Parameter[0]") /*Parameter.Parameter[0]*/};
                DataValue val = new DataValue(new Variant(data).Type == VariantType.Int32);
                Write(nodeIds, val).Start();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
        public bool SetBeerTypeID(Int32 data)
        {
            try
            {
                List<NodeId> nodeIds = new List<NodeId> { NodeId.Parse("ns=6;s=::Program:Cube.Command.Parameter.Parameter[1]") /*Parameter.Parameter[1]*/};
                DataValue val = new DataValue(new Variant(data).Type == VariantType.Int32);
                Write(nodeIds, val).Start();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public bool SetBatchAmount(Int32 data)
        {
            try
            {
                List<NodeId> nodeIds = new List<NodeId> { NodeId.Parse("ns=6;s=::Program:Cube.Command.Parameter.Parameter[2]") /*Parameter.Parameter[2]*/};
                DataValue val = new DataValue(new Variant(data).Type == VariantType.Int32);
                Write(nodeIds, val).Start();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

    }
}
