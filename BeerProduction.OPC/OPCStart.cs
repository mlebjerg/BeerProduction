using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Threading;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Workstation.ServiceModel.Ua;

namespace BeerProduction.DAL
{
    public class Class1
    {
        private ILoggerFactory loggerFactory;
        private UaApplication application;
        private AppBootstrapper bootstrapper;
    
        public void Init()
        {
            this.loggerFactory = new LoggerFactory();

            var config = new ConfigurationBuilder()
               .SetBasePath(Directory.GetCurrentDirectory())
               .AddJsonFile("appSettings.json", true)
               .Build();

            // Build and run an OPC UA application instance.
            this.application = new UaApplicationBuilder()
                .SetApplicationUri($"urn:{Dns.GetHostName()}")
                .SetDirectoryStore(Path.Combine(
                    Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
                    "Workstation.RobotHmi",
                    "pki"))
                .SetIdentity(ShowSignInDialog)
                .SetLoggerFactory(this.loggerFactory)
                .AddMappedEndpoints(config)
                .Build();

            this.application.Run();
        }
        private static async Task<IUserIdentity> ShowSignInDialog(EndpointDescription endpoint)
        {
            IUserIdentity userIdentity = null;
            //if (endpoint.UserIdentityTokens.Any(p => p.TokenType == UserTokenType.Anonymous))
            //{
            //    userIdentity = new AnonymousIdentity();
            //}
            //else if (endpoint.UserIdentityTokens.Any(p => p.TokenType == UserTokenType.UserName))
            //{
            var userName = "sdu"; //Console.ReadLine();
            var password = "1234"; //Console.ReadLine();
            userIdentity = new UserNameIdentity(userName, password);
            
            return userIdentity;
        }
    }
}
