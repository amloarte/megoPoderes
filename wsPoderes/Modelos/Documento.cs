using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modelos
{
    public class Documento
    {
        public string str_fechaRegistro { get; set; }
        public string str_usuarioRegistro { get; set; }
        public string str_ip { get; set; }
        public int int_tipo_mandatario { get; set; }
        public string str_mandatario { get; set; }
        public int int_estado { get; set; }
        public int int_Oficina { get; set; }
        public List<string> lst_doc_alfresco { get; set; }
        public List<Poder> lst_tipo_doc {get; set;}
        public List<Persona> lst_personas { get; set; }
    }
}
