using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _00_Biblioteca;
using System.Web.Script.Serialization;
using System.IO;

namespace _03_SerializarJSON
{
    class Program
    {
        static void Main(string[] args)
        {
            Usuario user = new Usuario() { nome = "Edna", CPF = "333.333.333-00", email = "edna@gmail.com" };
            JavaScriptSerializer serializador = new JavaScriptSerializer();
            string texto = serializador.Serialize(user);

            StreamWriter sw = new StreamWriter(@"C:\Users\matheus.spindula\Desktop\TreinamentoOtimiza\C# Avancado\02_SerializarJSON.json");
            
            sw.WriteLine(texto);
            sw.Close();
        }
    }
}
