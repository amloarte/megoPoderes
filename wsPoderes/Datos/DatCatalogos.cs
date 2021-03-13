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
    public class DatCatalogos
    {
		ServicioDALClient objCliente;

		public DatCatalogos()
		{
			objCliente = new ServicioDALClient();
		}

		public RespuestaTransaccion getCatalogos(string str_nombre_catalogo, string str_filtro)
		{
			RespuestaTransaccion respuesta = new RespuestaTransaccion();
			try
			{
				objCliente.AddInParameter(new ParametersIn { StrNameParameter = "prm_nombre_catalogo", dbType = DbType.String, objValue = str_nombre_catalogo });
				objCliente.AddInParameter(new ParametersIn { StrNameParameter = "prm_filtro", dbType = DbType.String, objValue = str_filtro });
				DataSet ds = objCliente.ExecuteDataSet("stp_getCatalogos", Convert.ToString(ConfigurationManager.AppSettings["BD_buro"]));
				if (ds.Tables.Count > 0)
				{
					respuesta.cuerpo = ds.Tables[0];
				}
				respuesta.codigo = "0";
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

		public RespuestaTransaccion getParametros(string str_nombre_parametro)
		{
			RespuestaTransaccion respuesta = new RespuestaTransaccion();
			try
			{
				objCliente.AddInParameter(new ParametersIn { StrNameParameter = "prm_nombre_parametro", dbType = DbType.String, objValue = str_nombre_parametro });
				DataSet ds = objCliente.ExecuteDataSet("getParametrosPoderes", Convert.ToString(ConfigurationManager.AppSettings["BD_sistemas"]));
				
				if (ds.Tables.Count > 0)
				{
					respuesta.cuerpo = ds.Tables[0];
				}
				respuesta.codigo = "0";
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

		public RespuestaTransaccion getUbicacionUsuario(int int_id_oficina)
		{
			RespuestaTransaccion respuesta = new RespuestaTransaccion();
			try
			{
				objCliente.AddInParameter(new ParametersIn { StrNameParameter = "prm_id_oficina", dbType = DbType.Int32, objValue = int_id_oficina });
				DataSet ds = objCliente.ExecuteDataSet("get_ubicacionUsuario", Convert.ToString(ConfigurationManager.AppSettings["BD_sistemas"]));

				if (ds.Tables.Count > 0)
				{
					respuesta.cuerpo = ds.Tables[0];
				}
				respuesta.codigo = "0";
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
