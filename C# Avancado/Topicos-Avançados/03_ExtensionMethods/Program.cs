using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03_ExtensionMethods
{
    class Program
    {
        static void Main(string[] args)
        {
            string valor = "olá mundo";
            valor = valor.FirstToUpper();
            Console.WriteLine(valor);
            Console.ReadKey();
        }
    }
}
