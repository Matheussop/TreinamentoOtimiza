using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
namespace _01_EscreverArquivo
{
    class Program
    {
        static void Main(string[] args)
        {
            using (StreamWriter arq = new StreamWriter("C:\\Users\\matheus.spindula\\Desktop\\TreinamentoOtimiza\\Curso_C#_Intermediario\\texto.txt")) { 
            arq.WriteLine("Olá meu primeiro arquivo");
            arq.WriteLine("Bem vindo ao ano 2020! \nBoa sorte para o seu ano ");
            }

            Console.WriteLine("Arquivo gravado");

            

            String[] texto = File.ReadAllLines("C:\\Users\\matheus.spindula\\Desktop\\TreinamentoOtimiza\\Curso_C#_Intermediario\\texto.txt");
            foreach (string textos in texto) {
                Console.WriteLine(textos);
            }
            Console.ReadKey();
        }
    }
}
