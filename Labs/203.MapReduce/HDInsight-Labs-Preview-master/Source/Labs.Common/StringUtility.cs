using System.Text;

namespace Labs.Common
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
