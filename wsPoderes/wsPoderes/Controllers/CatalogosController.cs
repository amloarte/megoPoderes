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
    public class CatalogosController : ApiController
    {
        [Route("api/getCatalogos")]
        [HttpGet]
        public IHttpActionResult getInfoSocio(string str_nombre_catalogo, string str_filtro)
        {
            try
            {

                RespuestaTransaccion respuesta = new RespuestaTransaccion();
                NegCatalogos neg = new NegCatalogos();
                respuesta = neg.getCatalogos(str_nombre_catalogo, str_filtro);
                return Ok(respuesta);

            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }


        [Route("api/getParametros")]
        [HttpGet]
        public IHttpActionResult getParmetros(string str_nombre_parametro)
        {
            try
            {

                RespuestaTransaccion respuesta = new RespuestaTransaccion();
                NegCatalogos neg = new NegCatalogos();
                respuesta = neg.getParametros(str_nombre_parametro);
                return Ok(respuesta);

            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [Route("api/getUbicacionUsuario")]
        [HttpGet]
        public IHttpActionResult getUbicacionUsuario(int int_id_oficina)
        {
            try
            {

                RespuestaTransaccion respuesta = new RespuestaTransaccion();
                NegCatalogos neg = new NegCatalogos();
                respuesta = neg.getUbicacionUsuario(int_id_oficina);
                return Ok(respuesta);

            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }


}
