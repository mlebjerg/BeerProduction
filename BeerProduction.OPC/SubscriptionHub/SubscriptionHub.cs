using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using BeerProduction.OPC;


namespace Serene1.SubscriptionHub
{
    [HubName("SubscriptionTicker")]
    public class SubscriptionHub : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }
        public void Hello(string message)
        {
            Clients.All.notifyAllUsers(message);
        }
        public void UpdateProdProc(int data)
        {
            Clients.All.UpdateProdProc(data);
        }

        public void UpdateState(int data)
        {
            Clients.All.UpdateState(data);
        }
    }
}