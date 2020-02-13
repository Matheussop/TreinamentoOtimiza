using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_ErroThrows
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.Write("Digite o númer 1: ");
            string digitado = Console.ReadLine();
            try{
                if (digitado == "1")
                {
                    Console.Write("Correto");
                }
                else
                {
                    throw new Exception("O valor digitado n é valido");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("algo de inesperado ocorreu" + e.Message);
            }


            Console.ReadKey();
        }
    }
}
