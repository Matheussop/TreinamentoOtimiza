using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03_ExtensionMethods
{
    public static class StringExtension
    {
        public static string FirstToUpper(this String str)
        {
            string primeira  = str.Substring(0,1);
            primeira = primeira.ToUpper();
            string segunda = str.Substring(1);
            return primeira + segunda;
        }
    }
}
