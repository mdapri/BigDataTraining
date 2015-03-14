#This is a script taken from the BIgData Course, 202.MapReduce
#$subscriptionName = "b2b3cc3f-b6dc-4206-99ec-130461f74246"
$storageAccountName = "mdbigdata"
$containerName = "mdbigdata"
$location = "West Europe"


$subscription=Get-AzureSubscription
$subscriptionName = $subscription.SubscriptionName
# Select Azure subscription
Select-AzureSubscription $subscriptionName
# Create a storage account
#New-AzureStorageAccount `
# -StorageAccountName $storageAccountName `
# -location $location
# Create a Blob storage container
#$storageAccountKey = Get-AzureStorageKey $storageAccountName | %{ $_. Primary }
#$destContext = New-AzureStorageContext `
# –StorageAccountName $storageAccountName `
# –StorageAccountKey $storageAccountKey
#New-AzureStorageContainer `
# -Name $containerName `
# -Context $destContext