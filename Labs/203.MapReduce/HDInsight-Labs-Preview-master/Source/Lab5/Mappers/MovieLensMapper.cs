using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Labs.Common;
using Microsoft.Hadoop.MapReduce;

namespace Lab5.Mappers
{
    public class MovieLensMapper : MapperBase
    {
        public override void Map(string inputLine, MapperContext context)
        {
            var dataRow = inputLine.Split('\t');
            if (dataRow.Count() == 4)
            {
                var userId = dataRow[1];
                var rating = dataRow[2];
                var movieId = dataRow[3];

                context.EmitKeyValue(userId, StringUtility.GetAsTabbedString(new[]{ movieId, rating}));
            }
        }
    }
}
