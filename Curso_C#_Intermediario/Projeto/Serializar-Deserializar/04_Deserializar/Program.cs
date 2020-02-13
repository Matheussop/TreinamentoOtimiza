using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using _00_Biblioteca;
using System.Web.Script.Serialization;

namespace _04_Deserializar
{
    class Program
    {
        static void Main(string[] args)
        {
            StreamReader sr = new StreamReader(@"C:\Users\matheus.spindula\Desktop\TreinamentoOtimiza\C# Avancado\02_SerializarJSON.json");
            string texto = sr.ReadToEnd();
            JavaScriptSerializer serializador = new JavaScriptSerializer();

            Usuario user = (Usuario)serializador.Deserialize(texto,typeof(Usuario));

            Console.WriteLine("Usuario: {0},\nCPF: {1},\nEmail: {2}.", user.nome,user.CPF,user.email);
            Console.ReadKey();
        }
    }
}
