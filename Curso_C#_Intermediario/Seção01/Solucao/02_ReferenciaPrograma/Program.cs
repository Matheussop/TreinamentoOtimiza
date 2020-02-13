using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _01_Biblioteca;
namespace _02_ReferenciaPrograma
{
    class Program
    {
        static void Main(string[] args)
        {
            CalculoJuros calc = new CalculoJuros();
            double resultado = calc.soma(10, 20);
            Console.WriteLine("O resultado da soma é " +  resultado);
            Console.ReadKey();
        }
    }
}
