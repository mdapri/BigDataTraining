using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using Microsoft.Hadoop.MapReduce;

namespace Lab1.Reducers
{
    public class NewUserPurchasesByContinentReducer : ReducerCombinerBase 
    {        
        public override void Reduce(string key, IEnumerable<string> values, ReducerCombinerContext context)
        {
            context.EmitKeyValue(key, values.Sum(v => int.Parse(v)).ToString(CultureInfo.InvariantCulture));
        }
    }
}
