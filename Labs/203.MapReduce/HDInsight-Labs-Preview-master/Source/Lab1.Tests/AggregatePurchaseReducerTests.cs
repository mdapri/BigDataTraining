using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Lab1.Mappers;
using Lab1.Reducers;
using Microsoft.Hadoop.MapReduce;
using NUnit.Framework;

namespace Lab1.Tests
{
    [TestFixture]
    public class AggregatePurchaseReducerTests
    {
        [Test]
        public void AggregatePurchaseReducer_TwoPurchasesUSAOneNewUser_50percentFigureEmitted()
        {
            // arrange
            const string newUserinputLine = "01/04/2013 14:21:27	199572	New	USA	Adword	Purchase";
            const string regularUserinputLine = "01/04/2013 14:26:27	399572	Regular	USA	Organic Search	Purchase";
            const string infrequentInputLine = "01/04/2013 15:21:27	369572	Infrequent	France	Adword	Purchase";

            //act
            var actualOutput = StreamingUnit.Execute<AggregatePurchaseMapper, AggregatePurchaseReducer>(
                new [] { newUserinputLine, regularUserinputLine, infrequentInputLine });

            //assert
            var reducerResult = actualOutput.ReducerResult.Single(v => v.Split('\t')[0] == "USA").Split('\t');
            Assert.AreEqual("2", reducerResult[1]); // Checking that the number of purchases for USA was 2
            Assert.AreEqual("50", reducerResult[2]); // Checking that 50% of purchases for USA were from new visitors
        }

    }
}
