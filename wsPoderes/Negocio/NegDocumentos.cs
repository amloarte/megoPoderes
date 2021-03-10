using Modelos;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Datos;

namespace Negocio
{
    public class NegDocumentos
    {
        private static DatDocumentos datDocumentos;
        private static RespuestaTransaccion respuesta;
        private static Persona objPersona;

        public RespuestaTransaccion registrarPoder(Documento documento)
        {
            respuesta = new RespuestaTransaccion();
            datDocumentos = new DatDocumentos();

            Documento objDocumento = new Documento();
            List<Poder> listTipoDoc = new List<Poder>();
            List<Persona> listPersonas = new List<Persona>();
            //List<Persona> lst_personasID = new List<Persona>();
            
            objDocumento = documento;
            listPersonas = documento.lst_personas;
            listTipoDoc = documento.lst_tipo_doc;

            try
            {
                //string poderID = datDocumentos.registrarDocumentoTipoPoder(listTipoDoc[0]);
                //lst_personasID = datDocumentos.registrarPersonas(listPersonas);
                //objDocumento.lst_personas = lst_personasID;
                //objDocumento.lst_tipo_doc= listTipoDoc;
                string documentoID = datDocumentos.registrarDocumento(objDocumento);
                respuesta.codigo = documentoID;

                var bjson = new BsonDocument();
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
