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

namespace BeerProduction.OPC
{
    public class OpcStart
    {
        public UaApplication application { get; set; }
        public AppBootstrapper bootstrapper { get; set; }

        public OpcStart()
        {

            var config = new ConfigurationBuilder()
               .SetBasePath(Directory.GetCurrentDirectory())
               .AddJsonFile("appSettings.json", true)
               .Build();

            application = new UaApplicationBuilder()
                .SetApplicationUri($"urn:{Dns.GetHostName()}:Workstation.StatusHmi")
                .SetDirectoryStore(Path.Combine(
                    Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
                    "Workstation.StatusHmi",
                    "pki"))
                .SetIdentity(ShowSignInDialog)
                .ConfigureLoggerFactory(o => o.AddDebug(LogLevel.Trace))
                .Build();

            application.Run();

            this.application.Run();
        }
        private async Task<IUserIdentity> ShowSignInDialog(EndpointDescription endpoint)
        {
            if (endpoint.UserIdentityTokens.Any(p => p.TokenType == UserTokenType.Anonymous))
            {
                return new AnonymousIdentity();
            }

            if (endpoint.UserIdentityTokens.Any(p => p.TokenType == UserTokenType.UserName))
            {
                var tcs = new TaskCompletionSource<IUserIdentity>();

                tcs.TrySetResult(new UserNameIdentity("sdu", "1234"));

                tcs.TrySetResult(new AnonymousIdentity());


                return await tcs.Task;
            }

            throw new NotImplementedException(
                "ProvideUserIdentity supports only UserName and Anonymous identity, for now.");
        }
    }
}
