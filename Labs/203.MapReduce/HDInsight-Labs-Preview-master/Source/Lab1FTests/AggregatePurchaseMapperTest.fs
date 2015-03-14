module AggregatePurchaseMapperTest

open System

let ExtractDataWhenPurchase (row: string) =
        let rowArray = row.Split('\t')
        if rowArray.[5] = "Purchase" then
            printfn "country: %s visitorType: %s" rowArray.[2] rowArray.[3] 

let Map (inputLine : string) =
    inputLine.Split('\n') 
    |> Array.iter(fun r -> ExtractDataWhenPurchase(r))

let output = Map("04/03/2013 12:17:36	193902	New	Germany	No Referrer	Purchase")