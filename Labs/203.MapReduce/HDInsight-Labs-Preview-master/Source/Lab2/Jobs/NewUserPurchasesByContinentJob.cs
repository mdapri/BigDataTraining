using System;
using Lab1.Reducers;
using Lab2.Reducers;
using Labs.Common;
using Microsoft.Hadoop.MapReduce;
using NewUserPurchasesByContinentMapper = Lab2.Mappers.NewUserPurchasesByContinentMapper;

namespace Lab2.Jobs
{
    public class NewUserPurchasesByContinentJob : HadoopJob<NewUserPurchasesByContinentMapper, NewUserPurchasesByContinentReducer>
    {
        public override HadoopJobConfiguration Configure(ExecutorContext context)
        {

            var configuration = new HadoopJobConfiguration
                                    {
                                        InputPath = MyConstants.AzureStorageVaultRoot + "/handsonlabs/lab1/output/part-00000",
                                        OutputFolder = MyConstants.AzureStorageVaultRoot + "/handsonlabs/lab2/output"
                                    }; 
            return configuration; 
        }
    }
}
