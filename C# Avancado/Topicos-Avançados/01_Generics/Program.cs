using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _01_Generics.Modelo;

namespace _01_Generics
{
    class Program
    {
        static void Main(string[] args)
        {
            Carro carro = new Carro() { marca = "FIAT", modelo = "UNO" };
            Casa casa = new Casa() { cidade = "Belo Horizonte", endereco = "mineirao" };
            Usuario user = new Usuario { nome = "Maria", email = "mario@gmail.com", senha = "12345" };

            Serializador.Serializar(carro);
            Serializador.Serializar(casa);
            Serializador.Serializar(user);

            Carro carro2 = Serializador.Deserializar<Carro>();
            Casa casa2 = Serializador.Deserializar<Casa>();
            Usuario user2 = Serializador.Deserializar<Usuario>();

            Console.WriteLine($"Carro2: {carro2.marca} - {carro2.modelo}");
            Console.WriteLine($"Casa2: {casa2.cidade} - {casa.endereco}");
            Console.WriteLine($"Usuarario2: {user2.nome} - {user2.email} - {user2.senha}");

            Console.ReadKey();
        }
    }
}
