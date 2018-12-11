using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(Serene1.SubscriptionHub.SignalRStartup))]

namespace Serene1.SubscriptionHub
{
    public class SignalRStartup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}
