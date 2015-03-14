using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Lab2.Mappers;
using Microsoft.Hadoop.MapReduce;
using NUnit.Framework;

namespace Lab1.Tests
{
    [TestFixture]
    public class NewUserPurchasesByContinentMapperTests
    {
        [Test]
        public void ContinentMapper_ViewProduct_NoDataEmitted()
        {
            //arrange
            const string inputLine = "France	5	20.5";

            //act
            var actualOutput = StreamingUnit.Execute<NewUserPurchasesByContinentMapper>(new string[] { inputLine });

            //assert
            var mapperResult = actualOutput.MapperResult.Single().Split('\t');
            Assert.AreEqual("Europe", mapperResult[0]);
            Assert.AreEqual("1.02", mapperResult[1]);
        }

        [Test]
        public void ContinentMapper_PurchaseOnGermanSite_ResultForGermany()
        {
            //arrange
            const string inputLine = "USA	10	50";

            //act
            var actualOutput = StreamingUnit.Execute<NewUserPurchasesByContinentMapper>(new string[] { inputLine });

            //assert
            var mapperResult = actualOutput.MapperResult.Single().Split('\t');
            Assert.AreEqual("North America", mapperResult[0]); // The Streaming unit emits the key as the first tab separated value in the MapperResult
            Assert.AreEqual("5", mapperResult[1]);
        }
    }
}
