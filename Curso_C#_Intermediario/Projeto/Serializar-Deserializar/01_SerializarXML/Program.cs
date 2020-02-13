using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using _00_Biblioteca;
using System.Xml.Serialization;

namespace _01_SerializarXML
{
    class Program
    {
        static void Main(string[] args)
        {
            Usuario user = new Usuario() { nome = "Matheus", CPF = "143.381.502-00", email = "teste@gmail.com" };
            XmlSerializer serializador = new XmlSerializer(typeof(Usuario)); // Pode se usar os dois tipos
            //XmlSerializer serializador = new XmlSerializer(user.GetType());
            StreamWriter wr = new StreamWriter(@"C:\Users\matheus.spindula\Desktop\TreinamentoOtimiza\C# Avancado\01_SerializarXML.xml");
            serializador.Serialize(wr,user);
        }
    }
}
