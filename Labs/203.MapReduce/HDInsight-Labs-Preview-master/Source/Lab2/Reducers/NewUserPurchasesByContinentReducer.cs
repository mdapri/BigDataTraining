using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Microsoft.Hadoop.MapReduce;

namespace Lab2.Reducers
{
    public class NewUserPurchasesByContinentReducer : ReducerCombinerBase 
    {        
        public override void Reduce(string key, IEnumerable<string> values, ReducerCombinerContext context)
        {
            context.EmitKeyValue(key, values.Sum(v => double.Parse(v)).ToString(CultureInfo.InvariantCulture));
        }
    }
}
