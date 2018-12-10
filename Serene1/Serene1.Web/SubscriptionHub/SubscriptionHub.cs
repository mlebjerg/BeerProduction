using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace BeerProduction.Web.SubscriptionHub
{
    public class SubscriptionHub : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }
    }
}