using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modelos
{
    public class Revocatoria
    {
        public int int_tipo { get; set; }
        public string str_fecha { get; set; }
        public string str_fecha_notifi_coop { get; set; }
        public int int_instancia { get; set; }
        public string str_inst_descripcion { get; set; }
        public string str_fecha_registro { get; set; }
        public List<int> lst_causas { get; set; }
        public List<string> lst_doc_alfesco { get; set; }
    }
}
