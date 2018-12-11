
using Microsoft.Owin;
using Owin;
using Serene1;
[assembly: OwinStartup(typeof(BeerProduction.Web.Global))]

namespace BeerProduction.Web
{
    using System;
    using System.Globalization;
    using System.Linq;
    using System.Threading;
    using System.Web.Mvc;
    using System.Web.Routing;
    using BeerProduction.Web.SubscriptionHub;
    

    public class Global : System.Web.HttpApplication
    {


        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=316888
        }

        protected void Application_Start(object sender, EventArgs e)
        {
            AreaRegistration.RegisterAllAreas();

            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            ValueProviderFactories.Factories.Remove(
                ValueProviderFactories.Factories.OfType<JsonValueProviderFactory>().First());

            ViewEngines.Engines.Clear();
            ViewEngines.Engines.Add(new RazorViewEngine());

            SiteInitialization.ApplicationStart();
        }

        protected void Application_End(object sender, EventArgs e)
        {
            SiteInitialization.ApplicationEnd();
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            var cookie = Request.Cookies["LanguagePreference"];
            if (cookie != null && !string.IsNullOrEmpty(cookie.Value))
            {
                try
                {
                    var culture = CultureInfo.GetCultureInfo(cookie.Value);
                    Thread.CurrentThread.CurrentUICulture = culture;
                }
                catch (CultureNotFoundException)
                {
                    // ignore
                }
            }
        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {
        }

        protected void Application_Error(object sender, EventArgs e)
        {
        }
    }
}