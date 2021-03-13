using Datos;
using Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class NegCatalogos
    {

        public RespuestaTransaccion getCatalogos(string str_nombre_catalogo, string str_filtro)
        {
            RespuestaTransaccion respuesta = new RespuestaTransaccion();
            DatCatalogos catalogos = new DatCatalogos();
            try
            {
                respuesta = catalogos.getCatalogos(str_nombre_catalogo, str_filtro);
            }
            catch (Exception ex )
            {
                respuesta.codigo = "1";
                respuesta.diccionario.Add("ERROR", ex.Message);
            }
            return respuesta;
        }


        public RespuestaTransaccion getParametros(string str_nombre_parametro)
        {
            RespuestaTransaccion respuesta = new RespuestaTransaccion();
            DatCatalogos catalogos = new DatCatalogos();
            try
            {
                respuesta = catalogos.getParametros(str_nombre_parametro);
            }
            catch (Exception ex)
            {
                respuesta.codigo = "1";
                respuesta.diccionario.Add("ERROR", ex.Message);
            }
            return respuesta;
        }
        
        public RespuestaTransaccion getUbicacionUsuario(int int_id_oficina)
        {
            RespuestaTransaccion respuesta = new RespuestaTransaccion();
            DatCatalogos catalogos = new DatCatalogos();
            try
            {
                respuesta = catalogos.getUbicacionUsuario(int_id_oficina);
            }
            catch (Exception ex)
            {
                respuesta.codigo = "1";
                respuesta.diccionario.Add("ERROR", ex.Message);
            }
            return respuesta;
        }
    }
}
