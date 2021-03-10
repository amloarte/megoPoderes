using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modelos
{
    public class Persona
    {
       public string str_id { get; set; }
       public string str_nombres { get; set; }
       public string str_documento { get; set; }
       public string str_direccion { get; set; }
       public string int_telefono { get; set; }
       public string str_correo { get; set; }
       public string str_tipo { get; set; }
       public List<Documento> lst_documento { get; set; }

    }                 
}
