using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_Classe
{
    class Program
    {
        static void Main(string[] args)
        {
            Pessoa p = new Pessoa();
            p.nome = "Matheus";
            p.sexo = "Masculino";
            p.dataNascimento = new DateTime(1998, 09, 27);


            p.setPosicao(100,255.22);

            string texto = p.getPosicao();

            Console.Write(texto);
            Console.ReadKey();
        }
    }
}
