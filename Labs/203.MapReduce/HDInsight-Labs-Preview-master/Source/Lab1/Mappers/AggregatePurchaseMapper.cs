using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using Microsoft.Hadoop.MapReduce;

namespace Lab1.Mappers
{
    public class AggregatePurchaseMapper : MapperBase
    {
        // Gets the total number of purchases in each country across the 4 days & the % of these purchases made by new users.
        // Each data row in 'clickstearm' data file is in the format...
        // 'DateTime of Hit \t ProductId \t VisitorType \t Country of Request \t Referrer \t Action' 
        // E.g. 01/03/2013 18:51:31	159822	Regular	USA	Adword	Purchase
        public override void Map(string inputLine, MapperContext context)
        {
            var dataRow = inputLine.Split('\t');
            if (dataRow.Count() == 6)
            {
                var visitorType = dataRow[2];
                var country = dataRow[3];
                var action = dataRow[5];

                if (action == "Purchase")
                {
                    context.IncrementCounter("HitMissProgress", "PurchaseFound", 1);
                    context.EmitKeyValue(country, visitorType);
                }
                context.IncrementCounter("HitMissProgress", "PurchaseNotFound", 1);
            }            
        }
    }
}
