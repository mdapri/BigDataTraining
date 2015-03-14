using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Lab1.Mappers;
using Microsoft.Hadoop.MapReduce;
using NUnit.Framework;

namespace Lab1.Tests
{
    /// <summary>
    /// Tests the AggregatePurchaseMapper using the StreamingUnit found in the Microsoft.Hadoop.MapReduce SDK.
    /// </summary>
    [TestFixture]
    public class AggregatePurchaseMapperTests
    {
        /// <summary>
        /// Check that the mapper emits no output if the input does not contain the correct number of tab separated fields.
        /// </summary>
        [Test]
        public void AggregatePurchaseMapper_BadDataWithTimestampMissing_NoDataEmitted()
        {
            //arrange
            const string inputLine = "199472	New	USA	Adword	View Product";

            //act
            var actualOutput = StreamingUnit.Execute<AggregatePurchaseMapper>(new string[] { inputLine });

            //assert
            Assert.IsTrue(actualOutput.MapperResult.Count == 0);
        }

        /// <summary>
        /// Check that the mapper emits no output if the input action was to view a product 
        /// (our mapper is only interested in Purchases).
        /// </summary>
        [Test]
        public void AggregatePurchaseMapper_ViewProduct_NoDataEmitted()
        {
            //arrange
            const string inputLine = "04/03/2013 14:21:27	199472	New	USA	Adword	View Product";

            //act
            var actualOutput = StreamingUnit.Execute<AggregatePurchaseMapper>(new string[] { inputLine });

            //assert
            Assert.IsTrue(actualOutput.MapperResult.Count == 0);
        }

        /// <summary>
        /// Check that the mapper correctly outputs a single result for Germany with a count of 1 and a value of 'New'
        /// when inputting a corresponding record. 
        /// </summary>
        [Test]
        public void AggregatePurchaseMapper_PurchaseOnGermanSite_ResultForGermany()
        {
            //arrange
            // Define a tab separated row of data for a purchase in Germany by a new user
            const string inputLine = "04/03/2013 12:17:36	193902	New	Germany	No Referrer	Purchase";

            //act
            var actualOutput = StreamingUnit.Execute<AggregatePurchaseMapper>(new[] { inputLine });

            //assert
            var mapperResult = actualOutput.MapperResult.Single().Split('\t');
            // NB: The Streaming unit emits the key as the first tab separated value in the MapperResult
            Assert.AreEqual("Germany", mapperResult[0]); 
            Assert.AreEqual("New", mapperResult[1]); 
        }

        [Test]
        public void AggregatePurchaseMapper_PurchaseOnUSASite_ResultForUSA()
        {
            //arrange
            // Define a tab separated row of data for a purchase in Germany by a new user
            const string inputLine = "01/03/2013 11:30:08	155990	New	USA	Adword	Purchase";

            //act
            var actualOutput = StreamingUnit.Execute<AggregatePurchaseMapper>(new[] { inputLine });

            //assert
            var mapperResult = actualOutput.MapperResult.Single().Split('\t');
            // NB: The Streaming unit emits the key as the first tab separated value in the MapperResult
            Assert.AreEqual("USA", mapperResult[0]);
            Assert.AreEqual("New", mapperResult[1]);
        }
    }
}
