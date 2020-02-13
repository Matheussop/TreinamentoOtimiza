using System;
using System.Collections.Generic; // a classe lista se encontra aqui 
using System.Text;
using System.IO; // usado para trabalhar com arquivo

namespace Array
{
    class Program
    {
        static void Main(string[] args)
        {
            #region EscrevendoArquivo
            string nomeArquivo = "arquivo.txt";
            string texto = "esse é o escopo do texto";
            File.WriteAllText(nomeArquivo, texto);

            Console.WriteLine("Arquivo criado com sucesso!");


            #endregion

            #region LendoArquivo
            string arquivo = "arquivo.txt";
            //a string texto foi criada na regiao EscrevendoArquivo
            texto = File.ReadAllText(arquivo);

            Console.WriteLine("Contéudo do arquivo: " + texto);
            #endregion

            #region escreve+1Linha
            string[] array = { "teste1", "teste2", "teste3" };
            File.WriteAllLines(nomeArquivo,array );
            #endregion

            #region ler+1Linha
            array = File.ReadAllLines(nomeArquivo);
            

            foreach(string textos in array)
            {
                Console.WriteLine(textos);
            }
            #endregion
            Console.ReadKey();
        }


    }
}
