using System.Web.Http.Cors;
using System.Web.Http;
using wsPoderes.App_Start;

namespace wsPoderes
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Configuración y servicios de API web
            config.EnableCors(new AccessPolicyCors());

            //Validación de autenticidad
            config.Filters.Add(new BasicAuthorization());
            // Rutas de API web
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi", 
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
