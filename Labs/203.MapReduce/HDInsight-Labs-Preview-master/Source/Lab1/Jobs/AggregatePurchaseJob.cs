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
    public class AggregatePurchaseJob : HadoopJob<AggregatePurchaseMapper, AggregatePurchaseReducer>
    {
        public override HadoopJobConfiguration Configure(ExecutorContext context)
        {

            var configuration = new HadoopJobConfiguration
                                    {
                                        InputPath = 
                                            MyConstants.AzureStorageVaultRoot + "/handsonlabs/data/clickStream.log",
                                        OutputFolder = 
                                            string.Format("{0}{1}", MyConstants.AzureStorageVaultRoot, "/handsonlabs/lab1/output")
                                    };

            return configuration; 
        }
    }
}
