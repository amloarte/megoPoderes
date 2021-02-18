using System;
using System.Configuration;
using System.Net.Http;
using System.Text;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace wsPoderes
{
    public class BasicAuthorization : AuthorizationFilterAttribute
    {
        private readonly string usuario = ConfigurationManager.AppSettings.Get("USUARIO");
        private readonly string password = ConfigurationManager.AppSettings.Get("CONTRASENIA");

        public override void OnAuthorization(HttpActionContext actionContext)
        {
            bool verificar_autorizacion = Convert.ToBoolean(ConfigurationManager.AppSettings["AUTORIZACION_BASICA"]);

            if (verificar_autorizacion)
            {
                var headers = actionContext.Request.Headers;

                if (headers.Authorization != null && headers.Authorization.Scheme == "Basic")
                {
                    try
                    {
                        var userPwd = Encoding.UTF8.GetString(Convert.FromBase64String(headers.Authorization.Parameter));
                        var user = userPwd.Substring(0, userPwd.IndexOf(":"));
                        var pass = userPwd.Substring(userPwd.IndexOf(":") + 1);

                        if (!((user.Equals(usuario) && pass.Equals(password))))
                        {
                            PutUnauthorizedResult(actionContext, "Necesita Autorizacion");
                        }
                    }
                    catch (Exception)
                    {
                        PutUnauthorizedResult(actionContext, "Cabecera de Autorizacion Invalida, Codificación Incorrecta");
                    }
                }
                else
                {
                    // No hay el header Authorization
                    PutUnauthorizedResult(actionContext, "Necesita Autorizacion");
                }
            }
        }

        private void PutUnauthorizedResult(HttpActionContext actionContext, string msg)
        {
            actionContext.Response = new HttpResponseMessage(System.Net.HttpStatusCode.Unauthorized)
            {
                Content = new StringContent(msg)
            };
        }
    }
}