using Lab5.Mappers;
using Labs.Common;
using Microsoft.Hadoop.MapReduce;

namespace Lab5.Jobs
{
    public class MovieLensJob : HadoopJob<MovieLensMapper>
    {
        public override HadoopJobConfiguration Configure(ExecutorContext context)
        {
            var configuration = new HadoopJobConfiguration
                                    {
                                        InputPath = 
                                            MyConstants.AzureStorageVaultRoot + "/handsonlabs/data/ua.base",
                                        OutputFolder = 
                                            string.Format("{0}{1}", MyConstants.AzureStorageVaultRoot, "/handsonlabs/lab5/output")
                                    };
            return configuration; 
        }
    }
}
