using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Biblioteca.Model;
namespace _01_Projeto
{
    class FuncionarioTexto
    {
        public static string ConverterParaTexto(Funcionarios funcionario)
        {
            String texto = String.Format("{0},{1},{2},{3},{4},{5},{6},{7},{8},{9},{10}",
                funcionario.nome,
                funcionario.dataNascimento,
                funcionario.telefone,
                funcionario.CPF,
                funcionario.CEP,
                funcionario.estado,
                funcionario.cidade,
                funcionario.endereco,
                funcionario.cargo,
                funcionario.salario,
                funcionario.dataContratacao);
            return texto;
        }
        public static Funcionarios ConverterParaFuncionario(string Linha)
        {
            string[] elementos = Linha.Split(',');
            Funcionarios funcionario = new Funcionarios();
            funcionario.nome = elementos[0];
            funcionario.dataNascimento = DateTime.Parse(elementos[1]);
            funcionario.telefone = elementos[2];
            funcionario.CPF = elementos[3];
            funcionario.CEP = int.Parse(elementos[4]);
            funcionario.estado = elementos[5];
            funcionario.cidade = elementos[6];
            funcionario.endereco = elementos[7];
            funcionario.cargo = elementos[8];
            funcionario.salario = double.Parse(elementos[9]);
            funcionario.dataContratacao = DateTime.Parse(elementos[10]);

            return funcionario;
        }
    }
}
