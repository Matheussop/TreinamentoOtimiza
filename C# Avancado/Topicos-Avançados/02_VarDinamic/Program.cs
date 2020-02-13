using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02_VarDinamic
{
    class Program
    {
        static void Main(string[] args)
        {
            object t1 = "";
            object t2 = 12345;
            t2 = "";

            var v1 = "";
            var v2 = 12345;
            // ERROR. v3;
            // ERROR. v2 = "";

            dynamic d1;
        }
    }
}
