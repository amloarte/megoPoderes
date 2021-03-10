using Datos.ServicioDalWcf;
using Modelos;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos
{
    public class DatSocios
    {
		ServicioDALClient objCliente;

		public DatSocios()
		{
			objCliente = new ServicioDALClient();
		}

		public RespuestaTransaccion  getInfoSocio(string str_documento)
		{
			RespuestaTransaccion respuesta = new RespuestaTransaccion();
			try
			{
				objCliente.AddInParameter(new ParametersIn { StrNameParameter = "prm_cedula", dbType = DbType.String, objValue = str_documento });
				DataSet ds = objCliente.ExecuteDataSet("get_InfoCliente", Convert.ToString(ConfigurationManager.AppSettings["BD_sistemas"]));
				if (ds.Tables.Count > 0)
				{
					if(ds.Tables[0].Rows.Count > 0)
					{
						respuesta.codigo = "0";
						respuesta.cuerpo = ds.Tables[0];
					}else
					{
						respuesta.codigo = "1";
					}
				}
				respuesta.diccionario.Add("ERROR", "");
				objCliente.EmptyLists(); objCliente.Close();
			}
			catch (Exception ex)
			{
				respuesta.diccionario.Add("ERROR", ex.Message);
				objCliente.Abort();
			}
			return respuesta;
		}
	}
}
