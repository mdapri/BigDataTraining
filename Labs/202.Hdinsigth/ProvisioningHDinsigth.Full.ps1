#Import-AzurePublishSettingsFile "C:\\Kits\\Windows Azure  MSDN - Visual Studio Premium-12-14-2014-credentials.publishsettings"
$subscription=Get-AzureSubscription
#$subscriptionName = $subscription.SubscriptionName
$subscriptionName="Windows Azure  MSDN - Visual Studio Premium"

Set-AzureSubscription -SubscriptionName $subscriptionName

$storageAccountName = "mdbigdata" # Provide a storage account name
$location = "West Europe" # For example, "West US"
## Create an Azure storage account
# New-AzureStorageAccount -StorageAccountName $storageAccountName Location $location
## List storage accounts for the current subscription
# Get-AzureStorageAccount
# List the keys for a storage account
#Get-AzureStorageKey "mdbigdata"
## Create Azure Blob storage container ##
#$storageAccountName = "mdbigdata"
#$storageAccountKey = "<StorageAccountKey>"
$containerName="mdbigdata"
## Create a storage context object
#$destContext = New-AzureStorageContext -StorageAccountName $storageAccountName  -StorageAccountKey $storageAccountKey
# Create a Blob storage container
# New-AzureStorageContainer -Name $containerName -Context $destContext


## Provision an HDInsight cluster ##
#$subscriptionName = "<SubscriptionName>"
#$storageAccountName = "mystorage"
#$containerName = "mycontainer"
$clusterName = "mdhdinsight"
$location = "West Europe“
$clusterNodes = 5
## Define the PS Credentials to be used when creating the cluster:
$hadoopUsername = "mdadmin"
$clusterUsername = "mdadmin"
$clusterPassword = "Av@nade001"

$secpasswd = ConvertTo-SecureString $clusterPassword -AsPlainText -Force
$clusterCreds = New-Object System.Management.Automation.PSCredential($clusterUsername, $secpasswd)
$blobStorage = "$storageAccountName.blob.core.windows.net"
$sqlServer = Get-AzureSqlDatabaseServer|%{$_.ServerName}
##credentials
$dbusername="mdadmin"
$dbpassword="Av@nade001"
$databaseName="hdinsight_meta"
$databaseCreds = new-object System.Management.Automation.PSCredential($dbusername, ($dbpassword  |    ConvertTo-SecureString -asPlainText -Force))

Select-AzureSubscription $subscriptionName
$storageAccountKey = Get-AzureStorageKey $storageAccountName | %{ $_. Primary }

New-AzureHDInsightClusterConfig -ClusterSizeInNodes $clusterNodes| 
    Set-AzureHDInsightDefaultStorage -StorageAccountName $blobStorage -StorageAccountKey $storageAccountKey -StorageContainerName $containerName |
    Add-AzureHDInsightMetastore -SqlAzureServerName $sqlServer -DatabaseName $databaseName -Credential $databaseCreds -MetastoreType OozieMetastore |
    New-AzureHDInsightCluster  -Credential $clusterCreds -Name $clusterName -Location $location

## OLD
#New-AzureHDInsightCluster  -Credential $clusterCreds -ClusterSizeInNodes $clusterNodes  -Name $clusterName -Location $location -DefaultStorageAccountName  $blobStorage -DefaultStorageAccountKey $storageAccountKey -DefaultStorageContainerName $containerName 

Get-AzureHDInsightCluster -Name $clusterName

#Save Money, cleanup, please
#Remove-AzureHDInsightCluster $clusterName