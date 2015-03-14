using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Hadoop.WebClient.Common;
using Microsoft.Hadoop.WebClient.OozieClient;
using Microsoft.Hadoop.WebClient.OozieClient.Contracts;
using Microsoft.Hadoop.WebHDFS;
using Microsoft.Hadoop.WebHDFS.Adapters;

namespace Lab2_Oozie
{
    class Program
    {
        private static readonly Uri AzureCluster = new Uri("https://handsonlabs.azurehdinsight.net:563/");
        private const string AzureUserName = "admin";
        private const string AzurePassword = "M!crosoft123";
        private const string AzureStorageVaultRoot = "asv://joydivision@joydivision.blob.core.windows.net";

        static void Main(string[] args)
        {
            var blobAdapter = new BlobStorageAdapter("joydivision",
                                                     "RMfUv/odmgsSdOcLqYfCLUKDIk9QI556Ly+3kxH8M6YgKcXwKMaoHLd6di201F/v1HVxHOjSMBJKPj1DXNSBQw==",
                                                     "joydivision",
                                                     true);
            var webHdfsClient = new WebHDFSClient("hadoop", blobAdapter);

            // Upload the ozzie config to appPath in order to submit job
            string source = AppDomain.CurrentDomain.BaseDirectory + @"\Workflow.xml";
            string target = "/handsonlabs/app/Workflow.xml".Replace('\\', '/');
            Console.WriteLine("Uploading to " + target);
            var createdFile = webHdfsClient.CreateFile(source, target);
            createdFile.Wait();

            var oozieClient = new OozieHttpClient(AzureCluster, AzureUserName, AzurePassword);
            string outputPath = AzureStorageVaultRoot + "/handsonlabs/output/oozieJob/" + Guid.NewGuid().ToString("N");
            var oozieJobProperties = new OozieJobProperties(
                                                    AzureUserName,
                                                    AzureStorageVaultRoot,
                                                    "headnodehost:9010",
                                                    AzureStorageVaultRoot + "/handsonlabs/app/Workflow.xml",
                                                    "",
                                                    outputPath);

            var submitJob = oozieClient.SubmitJob(oozieJobProperties.ToDictionary());
            string id = HttpClientTools.GetTaskResults(submitJob).Value<string>("id");
            oozieClient.StartJob(id);
            submitJob.Wait();

            // Check job status
            Task<HttpResponseMessage> t1 = oozieClient.GetJobInfo(id);
            var res = HttpClientTools.GetTaskResults(t1);
        }
    }
}
