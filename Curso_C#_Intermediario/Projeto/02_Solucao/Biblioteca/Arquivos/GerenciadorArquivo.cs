using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
namespace Biblioteca.Arquivos
{
    public class GerenciadorArquivo
    {
        public static void GravarArquivo(string nome, string texto)
        {
            string caminho = "C:\\Users\\matheus.spindula\\Desktop\\TreinamentoOtimiza\\Curso_C#_Intermediario\\" + nome + ".txt";
            if (File.Exists(caminho))
            {
                using (StreamWriter wr = File.AppendText(caminho))
                {
                    wr.WriteLine(texto);
                }
            }
            else
            {
                using(StreamWriter wr = new StreamWriter(caminho))
                {
                    wr.WriteLine(texto);
                }
            }
        }
        public static string[] LerArquivo(string nome)
        {
            string caminho = "C:\\Users\\matheus.spindula\\Desktop\\TreinamentoOtimiza\\Curso_C#_Intermediario\\" + nome + ".txt";
            return File.ReadAllLines(caminho);
        }
    }
}
