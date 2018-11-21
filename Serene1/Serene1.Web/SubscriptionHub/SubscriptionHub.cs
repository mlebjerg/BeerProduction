using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace Serene1.SubscriptionHub
{
    public class SubscriptionHub : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }
    }
}