using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _01_Projeto.Telas;

namespace _01_Projeto
{
    class Program
    {
        static void Main(string[] args)
        {
            int opcao = 0;
            do
            {
                Console.WriteLine("O que deseja fazer? \n-1 Cadastrar Cliente, \n-2Listar Cliente, \n-3Cadastrar Funcionario, \n-4Listar Funcionário, \n-5Finalizar Programa");
                //opcao = Convert.ToInt32(Console.Read());
                opcao = int.Parse(Console.ReadLine());
                ManterCliente telaCliente = new ManterCliente();
                ManterFuncionario telaFuncionario = new ManterFuncionario();
                switch (opcao)
                {
                    case 1:
                        telaCliente.cadastrarCliente();
                    break;
                    case 2:
                 
                        telaCliente.listarCliente();
                        break;
                    case 3:
                        telaFuncionario.cadastrarFuncionario();
                        break;
                    case 4:
                        telaFuncionario.listarFuncionario();
                        break;
                    case 5:
                        Console.WriteLine("Obrigado por usar nosso programa");
                        break;
                    default:
                        Console.WriteLine("Comando não encontrado");
                        break;
                }
            } while (opcao != 5);
            
        }
    }
}
