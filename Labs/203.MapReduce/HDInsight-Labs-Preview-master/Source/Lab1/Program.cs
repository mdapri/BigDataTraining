using System;
using System.IO;
using Lab1.Jobs;
using Lab1.Mappers;
using Lab1.Reducers;
using Labs.Common;
using Microsoft.Hadoop.MapReduce;

namespace Lab1
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                IHadoop hadoop = Hadoop.Connect(MyConstants.AzureCluster,
                                        MyConstants.AzureUserName,
                                        MyConstants.HadoopUserName,
                                        MyConstants.AzurePassword,
                                        MyConstants.AzureStorageAccount,
                                        MyConstants.AzureStorageKey,
                                        MyConstants.AzureStorageContainer,
                                        false);

                var result = hadoop.MapReduceJob.ExecuteJob<AggregatePurchaseJob>();

                Console.WriteLine();
                Console.WriteLine("Job Run Information");
                Console.WriteLine();
                Console.WriteLine("Job Id: {0}", result.Id);
                Console.WriteLine("Exit Code: {0}", result.Info.ExitCode);
                Console.WriteLine("Standard Out");
                Console.WriteLine(result.Info.StandardOut);
                Console.WriteLine();
                Console.WriteLine("Standard Err");
                Console.WriteLine(result.Info.StandardError);
                Console.ReadLine();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                Console.ReadLine();
            }
        }

        private static void RunUsingStreamingUnit()
        {
            using (var reader = new StreamReader(@"../../../clickStream.log"))
            {
                string sample = reader.ReadToEnd();
                StreamingUnitOutput output =
                    StreamingUnit.Execute<AggregatePurchaseMapper, AggregatePurchaseReducer>(sample.Split(new[] { '\r', '\n' }));

                foreach (string result in output.ReducerResult)
                {
                    Console.WriteLine(result);
                }
                Console.ReadLine();
            }
        }
    }
}
