using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Lab1
{
    public static class StringUtility
    {
        public static string GetAsTabbedString(string[] input)
        {
            StringBuilder sb = new StringBuilder();
            foreach (var s in input)
            {
                if (sb.Length > 0) sb.Append("\t");

                sb.Append(s);
            }
            return sb.ToString();
        }
    }
}
