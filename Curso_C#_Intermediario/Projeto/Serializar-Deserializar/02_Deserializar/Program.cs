using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _00_Biblioteca;
using System.IO;
using System.Xml.Serialization;

namespace _02_Deserializar
{
    class Program
    {
        static void Main(string[] args)
        {
            XmlSerializer serializador = new XmlSerializer(typeof(Usuario));
            StreamReader sr = new StreamReader(@"C:\Users\matheus.spindula\Desktop\TreinamentoOtimiza\C# Avancado\01_SerializarXML.xml");
            Usuario user = (Usuario)serializador.Deserialize(sr);
            Console.WriteLine("Usuario: {0}, \nCPF: {1}, \nEmail: {2}.", user.nome, user.CPF, user.email);
            Console.ReadKey();
        }
    }
}
