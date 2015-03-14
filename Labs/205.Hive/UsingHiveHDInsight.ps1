#PREREQUISITE Provision the cluster mdhdinsight. Infos are below
#Import-AzurePublishSettingsFile "C:\\Kits\\Windows Azure  MSDN - Visual Studio Premium-12-14-2014-credentials.publishsettings"
$subscription=Get-AzureSubscription
$subscriptionName = $subscription.SubscriptionName
Select-AzureSubscription $subscriptionName
$clusterName = "mdhdinsight"
$location = "West Europe“
$storageAccountName_Data = "mdbigdata" # Provide a storage account name
$storageAccountKey = Get-AzureStorageKey $storageAccountName_Data | %{ $_.Primary }
$containerName="mdbigdata"
#go to https://mdhdinsight.azurehdinsight.net/GettingStarted/Tutorials/WeblogAnalysis/WasbLoading
# the files are in wasb://mdbigdata@mdbigdata.blob.core.windows.net/HdiSamples/WebsiteLogSampleData/SampleLog/
#after have use the sample and created the weblogs_clean table try to use powershell
# 1. New-AzureHDInsightHiveJobDefinition
# 2. Invoke-Hive


$hiveQL = "DROP TABLE webactivity; CREATE EXTERNAL TABLE webactivity(log_date STRING, page_hits INT, bytes_recvd INT, bytes_sent INT) ROW FORMAT DELIMITED FIELDS TERMINATED BY ' ' STORED AS TEXTFILE LOCATION '/data/webactivity'; FROM weblogs_clean INSERT INTO TABLE webactivity SELECT s_date, COUNT(*), SUM(sc_bytes), SUM(cs_bytes) GROUP BY s_date ORDER BY s_date;"
$jobDef = New-AzureHDInsightHiveJobDefinition -Query $hiveQL -RunAsFileJob
#WARNING: When submitting a query use the -RunAsFile switch to prevent errors with query lengths or special characters
$hiveJob = Start-AzureHDInsightJob -Cluster $clusterName -JobDefinition $jobDef 
Write-Host "HiveQL job submitted..."
Wait-AzureHDInsightJob -Job $hiveJob -WaitTimeoutInSeconds 3600
Get-AzureHDInsightJobOutput -Cluster $clusterName -JobId $hiveJob