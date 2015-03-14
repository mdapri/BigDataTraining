#Import-AzurePublishSettingsFile "C:\\Kits\\Windows Azure  MSDN - Visual Studio Premium-12-14-2014-credentials.publishsettings"
$subscription=Get-AzureSubscription
$subscriptionName = $subscription.SubscriptionName
$storageAccountName = "mdbigdata" # Provide a storage account name
$location = "West Europe" # For example, "West US"
# Create an Azure storage account
# New-AzureStorageAccount -StorageAccountName $storageAccountName Location $location
# List storage accounts for the current subscription
Get-AzureStorageAccount
# List the keys for a storage account
Get-AzureStorageKey "mdbigdata"
## Create Azure Blob storage container ##
$storageAccountName = "mdbigdata"
$storageAccountKey = "<StorageAccountKey>"
$containerName="mdbigdata"
# Create a storage context object
$destContext = New-AzureStorageContext
-StorageAccountName $storageAccountName
-StorageAccountKey $storageAccountKey

# Create a Blob storage container
New-AzureStorageContainer -Name $containerName -Context $destContext


## Provision an HDInsight cluster ##
#$subscriptionName = "<SubscriptionName>"
#$storageAccountName = "mystorage"
#$containerName = "mycontainer"
$clusterName = "mdhdinsight"
$location = "West Europe“
$clusterNodes = 2
Select-AzureSubscription $subscriptionName
$storageAccountKey = Get-AzureStorageKey $storageAccountName | %{ $_. Primary }


New-AzureHDInsightCluster -ClusterSizeInNodes $clusterNodes  -Name $clusterName -Location $location -DefaultStorageAccountName "$storageAccountName.blob.core.windows.net" -DefaultStorageAccountKey $storageAccountKey -DefaultStorageContainerName $containerName 

$clusterName = "mdhdinisght"
Get-AzureHDInsightCluster -Name $clusterName

#Save Money, cleanup, please
#Remove-AzureHDInsightCluster $clusterName