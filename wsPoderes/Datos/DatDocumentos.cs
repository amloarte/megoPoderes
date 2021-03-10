using Modelos;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos
{
    public class DatDocumentos
    {
        private static string urlMongo = ConfigurationManager.AppSettings["BD_mongo"] + "?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
        public static IMongoClient client = new MongoClient(urlMongo);
        private IMongoDatabase database = client.GetDatabase("meg_poderes");
        private string personasCollection = "personas";
        private string documentosCollecion = "documentos";
        private string poderCollecion = "doc_tipo_poder";

        public string registrarDocumentoTipoPoder(Poder objPoder)
        {
            var documentosCollection = database.GetCollection<BsonDocument>(poderCollecion);
            var bjson = new BsonDocument();
            bjson = objPoder.ToBsonDocument();
            documentosCollection.InsertOne(bjson);
            var res = bjson.ElementAt(0).Value.ToString();
            return res;
        }

        public List<Persona> registrarPersonas(List<Persona> listaPersonas)
        {
            var documentosCollection = database.GetCollection<BsonDocument>(personasCollection);
            var bjson = new BsonDocument();
            bjson = listaPersonas.ToBsonDocument();
            documentosCollection.InsertOne(bjson);
            var res = bjson.ElementAt(0).Value.ToString();
            return null;
        }

        public string registrarDocumento(Documento objDocumentos)
        {
            var documentosCollection = database.GetCollection<BsonDocument>(documentosCollecion);
            var bjson = new BsonDocument();
            bjson = objDocumentos.ToBsonDocument();
            documentosCollection.InsertOne(bjson);
            var res = bjson.ElementAt(0).Value.ToString();
            return res;
        }

    }
}
