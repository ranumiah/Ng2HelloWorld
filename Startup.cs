using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddMvc();
    }

    public void Configure(IApplicationBuilder app)
    {
        app.UseDefaultFiles();
        app.UseStaticFiles();

        // There's still one problem. When you go directly to a route URL like http://localhost:5000/about from the browser's address bar, you see a 404 error.
        // This is a result of the fact that even though Angular knows how to reconcile this URL, the server does not.
        // Unless the below code is added as it will now use ASP.NET MVC routing
        app.UseMvc(routes =>
        {
            routes.MapRoute(
                name: "default",
                // handles all requests that haven't already been handled by the UseDefaultFiles or UseStaticFiles middleware
                template: "{*url}",
                defaults: new { controller = "Home", action = "Index" });
        });
    }
}