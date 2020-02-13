using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Biblioteca.Model
{
     public sealed class Funcionarios:Pessoa
    {
        public string cargo { set; get; }
        public double salario { get; set; }
        public DateTime dataContratacao { get; set; }

    }
}
