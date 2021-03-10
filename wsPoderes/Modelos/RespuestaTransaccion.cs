using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modelos
{
    public class RespuestaTransaccion
    {
        //Puede ser cualquier objeto
        public object cuerpo { get; set; }

        public string codigo { get; set; }

        public Dictionary<string, string> diccionario { get; set; }

        public RespuestaTransaccion()
        {
            diccionario = new Dictionary<string, string>();
        }
    }
}
