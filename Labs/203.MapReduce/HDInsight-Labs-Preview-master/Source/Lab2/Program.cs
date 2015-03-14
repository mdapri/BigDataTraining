using System;
using Lab1.Jobs;
using Lab2.Jobs;
using Labs.Common;
using Microsoft.Hadoop.MapReduce;

namespace Lab2
{
    class Program
    {
        private static void Main(string[] args)
        {
            IHadoop hadoop = Hadoop.Connect(MyConstants.AzureCluster,
                                        MyConstants.AzureUserName,
                                        MyConstants.HadoopUserName,
                                        MyConstants.AzurePassword,
                                        MyConstants.AzureStorageAccount,
                                        MyConstants.AzureStorageKey,
                                        MyConstants.AzureStorageContainer,
                                        false);

            //var result = hadoop.MapReduceJob.ExecuteJob<AggregatePurchaseJob>();
            //Console.WriteLine("Aggregate Purchase Job complete: {0}", result.Id);
            var chainedResult = hadoop.MapReduceJob.ExecuteJob<NewUserPurchasesByContinentJob>();
            Console.WriteLine("New User Purchases By Continent job complete: {0}", chainedResult.Id);
            
            Console.ReadLine();
        }
    }
}
