using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Biblioteca.Model;
using _01_Projeto.Conversores;
using Biblioteca.Arquivos;

namespace _01_Projeto.Telas
{
    class ManterCliente
    {
        public void cadastrarCliente()
        {
            Clientes cliente = new Clientes();
            Console.Clear();

            Console.WriteLine("------CADASTRAR CLIENTE-----");

            Console.Write("Nome: ");
            cliente.nome =  Console.ReadLine();

            Console.Write("Data de Nascimento: ");
            cliente.dataNascimento = DateTime.Parse(Console.ReadLine()); ;

            Console.Write("Telefone: ");
            cliente.telefone = Console.ReadLine();

            Console.Write("CPF: ");
            cliente.CPF = Console.ReadLine();

            Console.Write("CEP(apenas números): ");
            cliente.CEP = int.Parse(Console.ReadLine());

            Console.Write("Estado: ");
            cliente.estado = Console.ReadLine();

            Console.Write("Cidade: ");
            cliente.cidade = Console.ReadLine();

            Console.Write("Endereço: ");
            cliente.endereco = Console.ReadLine();

            GerenciadorArquivo.GravarArquivo("cliente",ClienteTexto.ConverterParaTexto(cliente));
        }

        public void listarCliente()
        {
            Console.Clear();

            Console.WriteLine("LISTAGEM DE CLIENTES");
            string[] linhas = GerenciadorArquivo.LerArquivo("cliente");
            foreach(string linha in linhas)
            {
                Clientes cliente = ClienteTexto.ConverterParaCliente(linha);
                Console.WriteLine("Nome: " + cliente.nome);
            }
        }
    }
}
