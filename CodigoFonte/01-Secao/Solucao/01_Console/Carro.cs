namespace _01_Console
{
    class Carro
    {
        string marca;
        string modelo;
        string cor;
        string nivelFarol;
        bool luzesInternas = false;

        public void abrirPorta() {
            luzesInternas = true;
        }

        void fecharPorta()
        {
            luzesInternas = false;
        }

        string acenderFarolAutomaticamente()
        {
            return "medio";
        }


    }
}
