using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.ComponentModel;
using System.Net;
using System.Security.Policy;
using System.Threading;
using System.Threading.Tasks;
using BeerProduction.DAL;
using BeerProduction.DAL.Models;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.Extensions.Logging;
using Serene1.SubscriptionHub;
using Serenity;
using Workstation.ServiceModel.Ua;

namespace BeerProduction.OPC
{
    public sealed class Opc
    {
        private readonly static Lazy<Opc> _instance = new Lazy<Opc>(
            () => new Opc(GlobalHost.ConnectionManager.GetHubContext<SubscriptionHub>().Clients));

        private readonly ConcurrentDictionary<string, Property> _properties = new ConcurrentDictionary<string, Property>();

        public UaApp UaApp1;
        private static string Url = $"opc.tcp://localhost:4840";
        private UaApplication app;
        public PropertyChangedEventHandler dummy;

        private static UnitofWork _uow = new UnitofWork();

        public static Opc Instance
        {
            get
            {
                return _instance.Value;
            }
        }

        public void Start()
        {
        }
        private IHubConnectionContext<dynamic> Clients
        {
            get;
            set;
        }
        private Opc(IHubConnectionContext<dynamic> clients)
        {
            Clients = clients;

            Connect();
        
            UaApp1 = new UaApp(app, Clients);

        }

        internal void Connect()
        {
            app = new UaApplicationBuilder()
                .SetApplicationUri($"urn:{Dns.GetHostName()}:BeerCraft")
                .ConfigureLoggerFactory(o => o.AddDebug(LogLevel.Trace))
                .AddMappedEndpoint(Url, Url, SecurityPolicyUris.None)
                .Build();
        }

        [Subscription(endpointUrl: "opc.tcp://localhost:4840", publishingInterval: -1)]
        public class UaApp : SubscriptionBase
        {
            private UaApplication App;
            private PropertyChangedEventHandler dummy = delegate { };

            private IHubConnectionContext<dynamic> Clients
            {
                get;
                set;
            }

            public UaApp(UaApplication app, IHubConnectionContext<dynamic> clients)
            {
                Clients = clients;
                {
                    App = app;
                    App.Run();
                    this.PropertyChanged += dummy; // needed to start background activities
                }
                string message = "Hi from OPC";
            }

            public async Task ButtonClick(int data)
            {

                programCubeCommandCntrlCmd = data;
                programCubeCommandCmdChangeRequest = true;

            }

            #region Inventory   

            /// <summary>
            /// Gets the value of ProgramInventoryBarley.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:Inventory.Barley")]
            public Single ProgramInventoryBarley
            {
                get { return programInventoryBarley; }
                private set { SetProperty(ref programInventoryBarley, value); }
            }

            private Single programInventoryBarley;

            /// <summary>
            /// Gets the value of ProgramInventoryHops.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:Inventory.Hops")]
            public Single ProgramInventoryHops
            {
                get { return programInventoryHops; }
                private set { SetProperty(ref programInventoryHops, value); }
            }

            private Single programInventoryHops;

            /// <summary>
            /// Gets the value of ProgramInventoryMalt.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:Inventory.Malt")]
            public Single ProgramInventoryMalt
            {
                get { return programInventoryMalt; }
                private set
                {
                    SetProperty(ref programInventoryMalt, value);
                }
            }

            private Single programInventoryMalt;

            /// <summary>
            /// Gets the value of ProgramInventoryYeast.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:Inventory.Yeast")]
            public Single ProgramInventoryYeast
            {
                get { return programInventoryYeast; }
                private set { SetProperty(ref programInventoryYeast, value); }
            }

            private Single programInventoryYeast;

            /// <summary>
            /// Gets the value of ProgramInventoryWheat.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:Inventory.Wheat")]
            public Single ProgramInventoryWheat
            {
                get { return programInventoryWheat; }
                private set { SetProperty(ref programInventoryWheat, value); }
            }

            private Single programInventoryWheat;

            #endregion

            #region Product

            /// <summary>
            /// Gets the value of Programproductproduce_amount.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:product.produce_amount")]
            public UInt16 Programproductproduce_amount
            {
                get { return programproductproduce_amount; }
                private set
                {
                    SetProperty(ref programproductproduce_amount, value);

                    NextProductAmount nextProductAmt = new NextProductAmount()
                    {
                        DateTime = DateTime.Now,
                        Value = (float)value
                    };

                    _uow.NextProductAmountRepos.Add(nextProductAmt);
                    _uow.SaveChanges();
                }
            }

            private UInt16 programproductproduce_amount;

            /// <summary>
            /// Gets the value of Programproductproduced.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:product.produced")]
            public UInt16 Programproductproduced
            {
                get { return programproductproduced; }
                private set {
                    SetProperty<UInt16>(ref programproductproduced, value);

                    ProductProcessed productProcessed = new ProductProcessed()
                    {
                        DateTime = DateTime.Now,
                        Value = (int)value
                    };
                    Clients.All.updateProdProc(value);
                    _uow.ProductProcessedRepos.Add(productProcessed);
                    _uow.SaveChanges();
                }
            }

            private UInt16 programproductproduced;

            /// <summary>
            /// Gets the value of Programproductgood.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:product.good")]
            public UInt16 Programproductgood
            {
                get { return programproductgood; }
                private set
                {
                    SetProperty(ref programproductgood, value);
                    ProductProcessed productProcessed = new ProductProcessed()
                    {
                        DateTime = DateTime.Now,
                        Value = (int)value
                    };
                    Clients.All.updateProdProc(value);
                    _uow.ProductProcessedRepos.Add(productProcessed);
                    _uow.SaveChanges();
                }
            }

            private UInt16 programproductgood;

            /// <summary>
            /// Gets the value of Programproductbad.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:product.bad")]
            public UInt16 Programproductbad
            {
                get { return programproductbad; }
                private set
                {
                    SetProperty(ref programproductbad, value);

                    ProductProcessed productProcessed = new ProductProcessed()
                    {
                        DateTime = DateTime.Now,
                        Value = (int)value
                    };
                    Clients.All.updateProdProc(value);
                    _uow.ProductProcessedRepos.Add(productProcessed);
                    _uow.SaveChanges();
                }
            }

            private UInt16 programproductbad;



            #endregion

            #region Commands

            /// <summary>
            /// Gets or sets the value of ProgramCubeCommandMachSpeed.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:Cube.Command.MachSpeed")]
            public Single ProgramCubeCommandMachSpeed
            {
                get { return programCubeCommandMachSpeed; }
                set { SetProperty(ref programCubeCommandMachSpeed, value); }
            }

            private Single programCubeCommandMachSpeed;

            /// <summary>
            /// Gets or sets the value of ProgramCubeCommandCntrlCmd.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:Cube.Command.CntrlCmd")]
            public Int32 ProgramCubeCommandCntrlCmd
            {
                get { return programCubeCommandCntrlCmd; }
                set { SetProperty(ref programCubeCommandCntrlCmd, value); }
            }

            private Int32 programCubeCommandCntrlCmd;

            /// <summary>
            /// Gets or sets the value of ProgramCubeCommandCmdChangeRequest.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:Cube.Command.CmdChangeRequest")]
            public Boolean ProgramCubeCommandCmdChangeRequest
            {
                get { return programCubeCommandCmdChangeRequest; }
                set { SetProperty(ref programCubeCommandCmdChangeRequest, value); }
            }

            private Boolean programCubeCommandCmdChangeRequest;

            /// <summary>
            /// Gets or sets the value of ProgramCubeCommandParameter.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:Cube.Command.Parameter")]
            public Object[] ProgramCubeCommandParameter
            {
                get { return programCubeCommandParameter; }
                set { SetProperty(ref programCubeCommandParameter, value); }
            }

            private Object[] programCubeCommandParameter;





            #endregion

            #region Status

            /// <summary>
            /// Gets the value of ProgramCubeStatusStateCurrent.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:Cube.Status.StateCurrent")]
            public Int32 ProgramCubeStatusStateCurrent
            {
                get { return programCubeStatusStateCurrent; }
                private set { SetProperty(ref programCubeStatusStateCurrent, value);
                    Clients.All.updateState(value);
                }
            }

            private Int32 programCubeStatusStateCurrent;

            /// <summary>
            /// Gets the value of ProgramCubeStatusMachSpeed.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:Cube.Status.MachSpeed")]
            public Single ProgramCubeStatusMachSpeed
            {
                get { return programCubeStatusMachSpeed; }
                private set
                {
                    SetProperty(ref programCubeStatusMachSpeed, value);
                    MachineSpeed machineSpeed = new MachineSpeed()
                    {
                        DateTime = DateTime.Now,
                        Value = value
                    };

                    _uow.MachineSpeedRepos.Add(machineSpeed);
                    _uow.SaveChanges();
                }
            }

            private Single programCubeStatusMachSpeed;

            /// <summary>
            /// Gets the value of ProgramCubeStatusCurMachSpeed.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:Cube.Status.CurMachSpeed")]
            public Single ProgramCubeStatusCurMachSpeed
            {
                get { return programCubeStatusCurMachSpeed; }
                private set { SetProperty(ref programCubeStatusCurMachSpeed, value); }
            }

            private Single programCubeStatusCurMachSpeed;

            /// <summary>
            /// Gets the value of ProgramCubeStatusParameter.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:Cube.Status.Parameter")]
            public Object[] ProgramCubeStatusParameter
            {
                get { return programCubeStatusParameter; }
                private set { SetProperty(ref programCubeStatusParameter, value); }
            }



            private Object[] programCubeStatusParameter;


            #endregion

            #region Admin

            /// <summary>
            /// Gets the value of ProgramCubeAdminProdDefectiveCount.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:Cube.Admin.ProdDefectiveCount")]
            public Int32 ProgramCubeAdminProdDefectiveCount
            {
                get { return programCubeAdminProdDefectiveCount; }
                private set { SetProperty(ref programCubeAdminProdDefectiveCount, value); }
            }

            private Int32 programCubeAdminProdDefectiveCount;


            /// <summary>
            /// Gets the value of ProgramCubeAdminProdProcessedCount.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:Cube.Admin.ProdProcessedCount")]
            public Int32 ProgramCubeAdminProdProcessedCount
            {
                get { return programCubeAdminProdProcessedCount; }
                private set { SetProperty(ref programCubeAdminProdProcessedCount, value);
                    Clients.All.UpdateProdProc(ProgramCubeAdminProdProcessedCount);
                }
            }

            private Int32 programCubeAdminProdProcessedCount;

            /// <summary>
            /// Gets the value of ProgramCubeAdminStopReason.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:Cube.Admin.StopReason")]
            public Object ProgramCubeAdminStopReason
            {
                get { return programCubeAdminStopReason; }
                private set { SetProperty(ref programCubeAdminStopReason, value); }
            }

            private Object programCubeAdminStopReason;


            //Batch ID
            /// <summary>
            /// Gets the value of ProgramCubeAdminParameterParameter_0_Value.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:Cube.Admin.Parameter[0].Value")]
            public Single ProgramCubeAdminParameterParameter_0_Value
            {
                get { return programCubeAdminParameterParameter_0_Value; }
                private set
                {
                    SetProperty(ref programCubeAdminParameterParameter_0_Value, value);

                    NextBatchID nxtBatchID = new NextBatchID()
                    {
                        DateTime = DateTime.Now,
                        Value = (float)value
                    };

                    _uow.NextBatchIDRepos.Add(nxtBatchID);
                    _uow.SaveChanges();
                }
            }

            private Single programCubeAdminParameterParameter_0_Value;


            #endregion
        }


    }
}

