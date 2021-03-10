using Datos;
using Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class NegSocios
    {
        public RespuestaTransaccion getInfoSocio(string str_cedula)
        {
            RespuestaTransaccion respuesta = new RespuestaTransaccion();
            try
            {
                DatSocios datSocios = new DatSocios();
                respuesta = datSocios.getInfoSocio(str_cedula);
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
