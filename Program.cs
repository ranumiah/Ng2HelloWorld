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
                .UseContentRoot(Directory.GetCurrentDirectory()) // Specify the location for Static Files That Can Only Be Accessed Via Server
                .UseWebRoot(Directory.GetCurrentDirectory()) // Specify the location for files to be accessed over the Web
                .UseStartup<Startup>() // Provide Startup Configuration Information
                .Build(); // Finish the build process

            host.Run(); // Run the Web Server
        }
    }
}