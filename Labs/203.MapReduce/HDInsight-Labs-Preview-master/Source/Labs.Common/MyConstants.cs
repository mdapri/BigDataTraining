using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Labs.Common
{
    public class MyConstants
    {
        public static readonly Uri AzureCluster = new Uri("https://{Your HDInsight Cluster Name}.azurehdinsight.net:563/");
        public const string AzureUserName = "{Username to your cluster}";
        public const string AzurePassword = "{Password to your cluster}"; 

        // This is the name of the account under which Hadoop will execute jobs.
        // Normally this is just "Hadoop".
        public const string HadoopUserName = "hadoop";

        // Azure Storage Information.
        public const string AzureStorageAccount = "{The Storage Account specified when creating your HDInsight cluster}";
        public const string AzureStorageKey = "{The Storage Account Key}";
        public const string AzureStorageContainer = "{The default Container in the Storage Account}";

        public const string AzureStorageVaultRoot = "asv://{Storage Container}@{Storage Account}.blob.core.windows.net";
    }
}
