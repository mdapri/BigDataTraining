using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using Microsoft.Hadoop.MapReduce;

namespace Lab1.Mappers
{
    public class NewUserPurchasesByContinentMapper : MapperBase
    {
        private readonly string[] _europeanCountries = new string[] { "France", "Germany", "UK" };
        private readonly string[] _northAmericanCountries = new string[] { "USA" };

        // Gets the total number of purchases made by users in North America & in Europe.
        // The input is the output from the AggregatePurchaseMapper job (which map reduced the 'clickstearm' data file).
        // In format........'Country \t Number of Purchases \t % of the purchases made by New users' 
        // E.g. 'France	5	20'
        public override void Map(string inputLine, MapperContext context)
        {
            var dataRow = inputLine.Split('\t');
            if (dataRow.Count() == 3)
            {
                var country = dataRow[0];
                int numPurchases;
                int percentNew;
                if (int.TryParse(dataRow[1], out numPurchases) && int.TryParse(dataRow[2], out percentNew))
                {
                    var continent = string.Empty;

                    if (_europeanCountries.Contains(country))
                    {
                        continent = "Europe";
                    }
                    else if (_northAmericanCountries.Contains(country))
                    {
                        continent = "North America";
                    }

                    if (!string.IsNullOrEmpty(continent))
                    {
                        var numNewUserPurchases = numPurchases * percentNew / 100;
                        context.EmitKeyValue(continent, numNewUserPurchases.ToString(CultureInfo.InvariantCulture));
                    }

                }
            }
        }
    }
}
