using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace Serene1.SubscriptionHub
{
    [HubName("SubscriptionTicker")]
    public class SubscriptionHub : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }
    }
}