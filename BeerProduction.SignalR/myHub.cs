using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using Microsoft.AspNet.SignalR;

namespace BeerProduction.SignalR
{
    public class MyHub : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }

        //Method that sends out what data all servers should get.
        public void BroadCastServerTime()
        {
            Clients.All.MessageReciever(DateTime.Now);
        }
    }
}
