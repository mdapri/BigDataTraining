module AggregatePurchaseReducerTests

open System

let Reduce(key, values) =
        let numOfPurchases = values |> Seq.sumBy(fun v -> 1)
        let numOfPurchasesFromNewVisitors = values |> Seq.sumBy(fun v -> if v = "New" then 1 else 0)
        let percentageNewVisitorsPurchasing = 
            if numOfPurchases > 0 then
                100 * numOfPurchasesFromNewVisitors/numOfPurchases    
            else 0    
        let output = numOfPurchases.ToString() + ", (" + percentageNewVisitorsPurchasing.ToString() + "%)"
        printfn "key: %s  output:  %s" key output


let output = Reduce("Germany", ["New"; "Regular"; "New"])