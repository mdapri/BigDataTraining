module AggregatePurchases

open System
open System.Net
open Microsoft.Hadoop.MapReduce
open Microsoft.Hadoop.MapReduce.HdfsExtras.Hdfs


// Gets the total number of purchases in each country across the 4 days & what percentage of these purchases were from new users.
// Each data row in 'clickstearm' data file is in the format...
// 'DateTime of Hit \t ProductId \t VisitorType \t Country of Request \t Referrer \t Action' 
// E.g. 01/03/2013 18:51:31	159822	Regular	USA	Adword	Purchase
type AggregatePurchaseMapper() =
    inherit MapperBase()

    let ExtractDataWhenPurchase (row: String, context: MapperContext) =
        let rowArray = row.Split('\t')
        if rowArray.[5] = "Purchase" then
            context.EmitKeyValue(rowArray.[3], rowArray.[2])

    override self.Map (inputLine, context) =
        inputLine.Split('\n') 
        |> Array.iter(fun r -> ExtractDataWhenPurchase(r, context))
            

type AggregatePurchaseReducer() =
    inherit ReducerCombinerBase()

    override self.Reduce(key, values, context) =
        let numOfPurchases = values |> Seq.sumBy(fun v -> 1)
        let numOfPurchasesFromNewVisitors = values |> Seq.sumBy(fun v -> if v = "New" then 1 else 0)
        let percentageNewVisitorsPurchasing = 
            if numOfPurchases > 0 then
                100 * numOfPurchasesFromNewVisitors/numOfPurchases    
            else 0    
        context.EmitKeyValue(key, numOfPurchases.ToString() + ", (" + percentageNewVisitorsPurchasing.ToString() + "%)")

type AggregatePurchaseJob() =
    inherit HadoopJob<AggregatePurchaseMapper, AggregatePurchaseReducer>()

    let input = "asv://joydivision@joydivision.blob.core.windows.net/handsonlabs/data/clickStream.log"
    let output = "asv://joydivision@joydivision.blob.core.windows.net/handsonlabs/lab1/fsharp/AggregatePurchaseResults"      

    override self.Configure(context) =
        let config = new HadoopJobConfiguration()
        config.InputPath <- input 
        config.OutputFolder <- output
        config 


[<EntryPoint>]
let main argv = 
    printfn "%A" argv

    let myAzureCluster = Uri("https://handsonlabs.azurehdinsight.net:563/")
    let myAzureUserName = "admin"
    let myAzurePassword = "M!crosoft123"
    let myAzureStorageAccount = "joydivision";
    let myAzureStorageKey = "RMfUv/odmgsSdOcLqYfCLUKDIk9QI556Ly+3kxH8M6YgKcXwKMaoHLd6di201F/v1HVxHOjSMBJKPj1DXNSBQw=="; 
    let myAzureStorageContainer = "joydivision"

    Console.WriteLine("Beginning job")
    let hadoop = Hadoop.Connect(myAzureCluster,
                                myAzureUserName,
                                "lab1fsharp",
                                myAzurePassword,
                                myAzureStorageAccount,
                                myAzureStorageKey,
                                myAzureStorageContainer,
                                false);
    let results = hadoop.MapReduceJob.ExecuteJob<AggregatePurchaseJob>()
    Console.WriteLine("job complete") 
    let x = Console.ReadLine()
    0 // return an integer exit code





