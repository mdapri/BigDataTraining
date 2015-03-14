using System;
using System.Globalization;
using System.Linq;
using Microsoft.Hadoop.MapReduce;

namespace Lab2.Mappers
{
    public class NewUserPurchasesByContinentMapper : MapperBase
    {
        private readonly string[] _europeanCountries = new string[] { "France", "Germany", "UK" };
        private readonly string[] _northAmericanCountries = new string[] { "USA" };

        // Gets the total number of purchases made by new users in North America & in Europe.
        // The input is the output from the AggregatePurchaseMapper job 
        // In format: 'Country \t Number of Purchases \t % of the purchases made by New users' E.g. 'France	5	15.64'
        public override void Map(string inputLine, MapperContext context)
        {
            var dataRow = inputLine.Split('\t');
            if (dataRow.Count() == 3)
            {
                var country = dataRow[0];
                int numPurchases;
                double percentNew;
                if (int.TryParse(dataRow[1], out numPurchases) && double.TryParse(dataRow[2], out percentNew))
                {
                    var continent = string.Empty;
                    if (_europeanCountries.Contains(country))
                    {
                        continent = "Europe";
                        context.IncrementCounter("HitMissProgress", "EuropeanCountryFound", 1);
                    }
                    else if (_northAmericanCountries.Contains(country))
                    {
                        continent = "North America";
                        context.IncrementCounter("HitMissProgress", "NorthAmericanCountryFound", 1);
                    }

                    if (!string.IsNullOrEmpty(continent))
                    {
                        var numNewUserPurchases = Math.Round(numPurchases * percentNew / 100, 2);
                        context.EmitKeyValue(continent, numNewUserPurchases.ToString(CultureInfo.InvariantCulture));
                    }
                }
            }
        }
    }
}
