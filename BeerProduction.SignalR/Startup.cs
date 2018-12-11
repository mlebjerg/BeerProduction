using System;
using System.Configuration;
using System.Threading.Tasks;
using System.Web.Hosting;
using System.Web.Services.Description;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Owin;
using Owin;
using BeerProduction.OPC.SubscriptionHub;

[assembly: OwinStartup(typeof(BeerProduction.SignalR.Startup))]

namespace BeerProduction.SignalR
{
    public class Startup
    {

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; } 

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddSignalR();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicaionBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();


            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseSignalR(routes => { routes.MapHub<SubscriptionHub>("SubscriptionHub"); });

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=DeviceMonitoring}/{action=Index}/{id?}");
            });
        }
    }
}
