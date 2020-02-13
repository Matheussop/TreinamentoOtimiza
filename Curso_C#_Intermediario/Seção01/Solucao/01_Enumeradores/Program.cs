using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_Enumeradores
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.BackgroundColor = ConsoleColor.Black ; 
            Console.ForegroundColor = ConsoleColor.DarkRed ;
            Console.WriteLine(EstadoCivil.Solteiro);
            Console.ReadKey(); 
        }
    }
}
