using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modelos
{
    public class Poder
    {
        //public int int_id { get; set; }
        public int int_tipo { get; set; }
        public string str_fechaModificacion { get; set; }
        public string str_fechaOtorgamiento { get; set; }
        public string str_fechaVencimiento { get; set; }
        public int int_instancia { get; set; }
        public int int_pais { get; set; }
        public int int_canton { get; set; }
        public string str_ciudad { get; set; }
        public List<int> lst_facultades { get; set; }
        public List<Revocatoria> lst_revocatoria { get; set; }
    }
}
