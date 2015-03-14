using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Lab5.Mappers;
using Microsoft.Hadoop.MapReduce;
using NUnit.Framework;

namespace Lab5.Tests
{
    [TestFixture]
    public class MovieLensMapperTests
    {
        [Test]
        public void AggregatePurchaseMapper_ViewProduct_NoDataEmitted()
        {
            //arrange
            const string inputLine = "62	328	3	879371909";

            //act
            var actualOutput = StreamingUnit.Execute<MovieLensMapper>(new string[] { inputLine });

            //assert
            var result = actualOutput.MapperResult.Single().Split('\t');
            Assert.AreEqual("328", result[0]);
            Assert.AreEqual("879371909", result[1]);
            Assert.AreEqual("3", result[2]);
        }
    }
}
