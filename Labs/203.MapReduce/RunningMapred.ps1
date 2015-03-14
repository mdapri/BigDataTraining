$subscriptionName = Get-AzureSubscription |%{ $_.SubscriptionName }
$clusterName = "mdhdinisght"
#Add-AzureAccount
# Define the MapReduce job
$wordCountJobDefinition = New-AzureHDInsightMapReduceJobDefinition 
-JarFile "wasb:///example/jars/hadoop-mapreduce-examples.jar" -ClassName "wordcount" -Arguments "wasb:///example/data/gutenberg/davinci.txt" "wasb:///example/data/WORDCOUNTOUT"
# Submit the job 
#Select-AzureSubscription $subscriptionName #really needed? 
$wordcountJob=Start-AzureHDInsightJob $wordCountJobDefinition

#Remove-AzureHDInsightCluster $clusterName

