using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_Classe
{
    partial class Pessoa
    {
        public string nome {
            set {
                nome = value.Trim().ToUpper();
            } get {
                return nome;
            }
        } 
        public string sexo;
        public DateTime dataNascimento;
        public double posicaoX, posicaoY;

        public string resumoPessoa()
        {
            string resumo = "Nome: " + nome + "\nSexo: " + sexo + "\nData de Nascimento: " + dataNascimento ; 
            return resumo;
        }
        public string getPosicao()
        {
            return posicaoX + ", " + posicaoY;
        }

        public Pessoa(string n, string s , DateTime nascimento, double x , double y)
        {
            n = nome;
            s = sexo;
            dataNascimento = nascimento;
            posicaoX = x;
            posicaoY = y;
        }
        public Pessoa()
        {
            DateTime a = new DateTime(0000, 00, 00);
            Pessoa p = new Pessoa("", "", a , 0.0, 0.0);
        }
        public void setPosicao(double x, double y)
        {
            posicaoX = x;
            posicaoY = y;
            
        }
    }
}
