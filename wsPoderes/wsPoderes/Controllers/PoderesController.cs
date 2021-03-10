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
    public class PoderesController : ApiController
    {

        [Route("api/registrarPoder")]
        [HttpPost]
        public IHttpActionResult getInfoSocio(Documento documento)
        {
            try
            {
                RespuestaTransaccion respuesta = new RespuestaTransaccion();
                NegDocumentos negPoderes = new NegDocumentos();
                respuesta = negPoderes.registrarPoder(documento);
                return Ok(respuesta);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
