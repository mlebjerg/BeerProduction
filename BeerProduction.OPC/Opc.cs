using System;
using System.ComponentModel;
using System.Net;
using System.Security.Policy;
using BeerProduction.DAL;
using Microsoft.AspNet.SignalR;
using Serene1.SubscriptionHub;
using Workstation.ServiceModel.Ua;

namespace BeerProduction.OPC
{
    public sealed class Opc
    {
        private static Opc instance;
        private static readonly object padlock = new object();
        public UaApp UaApp1;
        private static string Url = $"opc.tcp://localhost:4840";
        private UaApplication app;
        public PropertyChangedEventHandler dummy;

        private static UnitofWork _uow = new UnitofWork();

        public static Opc Instance
        {
            get
            {
                lock (padlock)
                {
                    if (instance != null) return instance;
                    instance = new Opc();
                    return instance;

                }
            }
        }

        public void Start()
        {
        }

        private Opc()
        {
            Connect();

            UaApp1 = new UaApp(app);
        }

        internal void Connect()
        {
            app = new UaApplicationBuilder()
                .SetApplicationUri($"urn:{Dns.GetHostName()}:BeerCraft")
                .AddMappedEndpoint(Url, Url, SecurityPolicyUris.None)
                .Build();
        }

        [Subscription(endpointUrl: "opc.tcp://localhost:4840", publishingInterval: -1)]
        public class UaApp : SubscriptionBase
        {
            private UaApplication app;
            private PropertyChangedEventHandler dummy = delegate { };

            public UaApp(UaApplication app)
            {
                {
                    app.Run();
                    PropertyChanged += dummy; // needed to start background activities
                }
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
                private set { SetProperty(ref programInventoryMalt, value);  }
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
                private set { SetProperty(ref programproductproduce_amount, value);}
            }

            private UInt16 programproductproduce_amount;

            /// <summary>
            /// Gets the value of Programproductproduced.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:product.produced")]
            public UInt16 Programproductproduced
            {
                get { return programproductproduced; }
                private set { SetProperty<UInt16>(ref programproductproduced, value);
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
                private set { SetProperty(ref programproductgood, value); }
            }

            private UInt16 programproductgood;

            /// <summary>
            /// Gets the value of Programproductbad.
            /// </summary>
            [MonitoredItem(nodeId: "ns=6;s=::Program:product.bad")]
            public UInt16 Programproductbad
            {
                get { return programproductbad; }
                private set { SetProperty(ref programproductbad, value); }
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
                    var hub = GlobalHost.ConnectionManager.GetHubContext<SubscriptionHub>();
                    hub.Clients.All.UpdateState(value);
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
                private set { SetProperty(ref programCubeStatusMachSpeed, value); }
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
                private set { SetProperty(ref programCubeAdminParameterParameter_0_Value, value); }
            }

            private Single programCubeAdminParameterParameter_0_Value;


            #endregion
        }


    }
}

