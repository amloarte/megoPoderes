using Datos.ServicioDalWcf;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos
{
    public class DatTitural
    {
		ServicioDALClient objCliente;

		public DatTitural()
		{
			objCliente = new ServicioDALClient();
		}

		public int getParticipantesAleatorio(int int_sorteo, int int_oficina)
		{
			try
			{

			}
			catch (Exception ex)
			{
				objCliente.Abort();
				throw new Exception(ex.Source + " : " + ex.Message + " (" + ex.ToString() + ")");
			}
			return 0 ;
		}
	}
}
