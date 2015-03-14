using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Lab1.Mappers;
using Lab1.Reducers;
using Labs.Common;
using Microsoft.Hadoop.MapReduce;

namespace Lab1.Jobs
{
    public class NewUserPurchasesByContinentJob : HadoopJob<NewUserPurchasesByContinentMapper, NewUserPurchasesByContinentReducer>
    {
        public override HadoopJobConfiguration Configure(ExecutorContext context)
        {

            var configuration = new HadoopJobConfiguration
                                    {
                                        InputPath = MyConstants.AzureStorageVaultRoot + "/handsonlabs/lab1Results.log",
                                        OutputFolder = MyConstants.AzureStorageVaultRoot + "/handsonlabs/output/newUserPurchasesByContinent/" + Guid.NewGuid().ToString("N")
                                    }; 
            return configuration; 
        }
    }
}
