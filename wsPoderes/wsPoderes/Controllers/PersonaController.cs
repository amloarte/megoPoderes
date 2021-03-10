using Modelos;
using Negocio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace wsPoderes.Controllers
{
    public class PersonaController : ApiController
    {
        [Route("api/getInfoSocio")]
        [HttpGet]
        public IHttpActionResult getInfoSocio(string str_cedula)
        {
            try
            {
                RespuestaTransaccion respuesta = new RespuestaTransaccion();
                NegSocios neg = new NegSocios();
                respuesta = neg.getInfoSocio(str_cedula);
                return Ok(respuesta);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

    }
}
