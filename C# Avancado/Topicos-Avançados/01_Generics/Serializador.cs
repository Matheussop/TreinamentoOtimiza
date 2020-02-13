using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using System.IO;

namespace _01_Generics
{
    public class Serializador 
    {
        public static void Serializar(object obj)
        {
            StreamWriter sw = new StreamWriter(@"C:\Users\matheus.spindula\Desktop\TreinamentoOtimiza\C# Avancado\03_"+ obj.GetType().Name + ".txt");
            JavaScriptSerializer serializador = new JavaScriptSerializer();
            string texto = serializador.Serialize(obj);

            sw.Write(texto);
            sw.Close();

        }
        public static T Deserializar<T>()
        {
            StreamReader sr = new StreamReader(@"C:\Users\matheus.spindula\Desktop\TreinamentoOtimiza\C# Avancado\03_"+ typeof(T).Name +".txt");
            string texto = sr.ReadToEnd();
            JavaScriptSerializer serializador = new JavaScriptSerializer();
            T obj = (T)serializador.Deserialize(texto,typeof(T));
            return obj;
        }
    }
}
