using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Biblioteca.Model;
using Biblioteca.Arquivos;
using _01_Projeto.Conversores;

namespace _01_Projeto.Telas

{
    class ManterFuncionario
    {
        public void cadastrarFuncionario()
        {
            Funcionarios funcionario = new Funcionarios();
            Console.Clear();

            Console.WriteLine("------CADASTRAR FUNCIONARIO-----");

            Console.Write("Nome: ");
            funcionario.nome = Console.ReadLine();

            Console.Write("Data de Nascimento: ");
            funcionario.dataNascimento = DateTime.Parse(Console.ReadLine()); ;

            Console.Write("Telefone: ");
            funcionario.telefone = Console.ReadLine();

            Console.Write("CPF: ");
            funcionario.CPF = Console.ReadLine();

            Console.Write("CEP(apenas números): ");
            funcionario.CEP = int.Parse(Console.ReadLine());

            Console.Write("Estado: ");
            funcionario.estado = Console.ReadLine();

            Console.Write("Cidade: ");
            funcionario.cidade = Console.ReadLine();

            Console.Write("Endereço: ");
            funcionario.endereco = Console.ReadLine();

            Console.Write("Cargo: ");
            funcionario.cargo = Console.ReadLine();

            Console.Write("Salario: ");
            funcionario.salario = double.Parse(Console.ReadLine());

            Console.Write("Data de Contratação ");
            funcionario.dataContratacao = DateTime.Parse(Console.ReadLine());

            GerenciadorArquivo.GravarArquivo("funcionario", FuncionarioTexto.ConverterParaTexto(funcionario));
        }

        public void listarFuncionario()
        {
            Console.Clear();

            Console.WriteLine("LISTAGEM DE FUNCIONARIOS");
            string[] linhas = GerenciadorArquivo.LerArquivo("funcionario");
            foreach (string linha in linhas)
            {
                Funcionarios funcionario = FuncionarioTexto.ConverterParaFuncionario(linha);
                Console.WriteLine($"Nome: {funcionario.nome}" + $"\nCargo: {funcionario.cargo}");
            }
        }
    }
}
