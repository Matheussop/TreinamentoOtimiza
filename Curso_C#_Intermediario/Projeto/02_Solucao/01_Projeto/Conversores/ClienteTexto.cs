using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Biblioteca.Model;

namespace _01_Projeto.Conversores
{
    public class ClienteTexto
    {
        public static string ConverterParaTexto(Clientes cliente)
        {
            String texto = String.Format("{0},{1},{2},{3},{4},{5},{6},{7}",
                cliente.nome,
                cliente.dataNascimento,
                cliente.telefone,
                cliente.CPF,
                cliente.CEP,
                cliente.estado,
                cliente.cidade,
                cliente.endereco);
            return texto;
        }
        public static Clientes ConverterParaCliente(string Linha)
        {
            string[] elementos = Linha.Split(',');
            Clientes cliente = new Clientes();
            cliente.nome = elementos[0];
            cliente.dataNascimento = DateTime.Parse(elementos[1]);
            cliente.telefone = elementos[2];
            cliente.CPF = elementos[3];
            cliente.CEP = int.Parse(elementos[4]);
            cliente.estado = elementos[5];
            cliente.cidade = elementos[6];
            cliente.endereco = elementos[7];

            return cliente;
        }
    }
}
