using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using Lab5.Jobs;
using Lab5.Mappers;
using Labs.Common;
using Microsoft.Hadoop.MapReduce;

namespace Lab5
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                RunUsingStreamingUnit();

                IHadoop hadoop = Hadoop.Connect(MyConstants.AzureCluster,
                                        MyConstants.AzureUserName,
                                        MyConstants.HadoopUserName,
                                        MyConstants.AzurePassword,
                                        MyConstants.AzureStorageAccount,
                                        MyConstants.AzureStorageKey,
                                        MyConstants.AzureStorageContainer,
                                        false);

                var result = hadoop.MapReduceJob.ExecuteJob<MovieLensJob>();

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
            using (var reader = new StreamReader(@"../../ua.base"))
            {
                string sample = reader.ReadToEnd();
                StreamingUnitOutput output =
                    StreamingUnit.Execute<MovieLensMapper>(sample.Split(new[] { '\r', '\n' }));

                const string path = "C:\\Data\\MovieLensData.log";

                File.WriteAllLines(path, Enumerable.ToArray(output.MapperResult));

                Console.WriteLine("Written to {0}", path);
                Console.ReadLine();
            }
        }
    }
}
