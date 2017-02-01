using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace Ng2HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            var host = new WebHostBuilder() // Building a Web Host for the application
                .UseKestrel() // It will run on Kestrel Web Server
                .UseContentRoot(Directory.GetCurrentDirectory()) // Base Path That Can Only Be Accessed Via Server
                .UseWebRoot(Directory.GetCurrentDirectory()) // Base Path which can be accessed via Server OR 
                .UseStartup<Startup>() // Provide Startup Configuration Information
                .Build(); // Finish the build process

            host.Run(); // Run the Web Server
        }
    }
}