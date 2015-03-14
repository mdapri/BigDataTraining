using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Labs.Common;
using Microsoft.Hadoop.MapReduce;

namespace Lab1.Reducers
{
    public class AggregatePurchaseReducer : ReducerCombinerBase 
    {        
        public override void Reduce(string key, IEnumerable<string> values, ReducerCombinerContext context)
        {
            var allValuesForCountryKey = values as List<string> ?? values.ToList();
            var numOfPurchases = allValuesForCountryKey.Count();
            var numOfPurchasesFromNewVisitors = allValuesForCountryKey.Count(v => v == "New");

            context.EmitKeyValue(key, 
                                 StringUtility.GetAsTabbedString(
                                                new[]
                                                {
                                                    numOfPurchases.ToString(CultureInfo.InvariantCulture),
                                                    Math.Round(100.0 * numOfPurchasesFromNewVisitors/numOfPurchases, 2).ToString(CultureInfo.InvariantCulture)
                                                }));
        }
    }
}
