$subscriptionName="Windows Azure  MSDN - Visual Studio Premium"

Set-AzureSubscription -SubscriptionName $subscriptionName

# WASB variables
$storageAccountName = "mdbigdata"
$containerName = "mdbigdata"

# SQL database variables
$sqlDatabaseServer = Get-AzureSqlDatabaseServer| %{$_.ServerName} 
$sqlDatabaseLogin = "mdadmin"
$sqlDatabaseLoginPassword = "Av@nade001"
$sqlDatabaseName = "hdinsight_meta"  
$sqlDatabaseTableName = "log4jLogsCount"

## Oozie files for the tutorial  
#$workflowDefinition = "C:\Tutorials\UseOozie\workflow.xml"
#$hiveQLScript = "C:\Tutorials\UseOozie\useooziewf.hql"

# WASB folder for storing the Oozie tutorial files.
$destFolder = "tutorials/useoozie"  # Do NOT use the long path here

# Create a storage context object
$storageaccountkey = get-azurestoragekey $storageAccountName | %{$_.Primary}
$destContext = New-AzureStorageContext -StorageAccountName $storageAccountName -StorageAccountKey $storageaccountkey

############ WARNING
### before doing this , copy the files in the Tutorials folder into the azure target folder

function prepareHiveDataFile()
{
    Write-Host "Make a copy of the sample.log file ... " -ForegroundColor Green
    Start-CopyAzureStorageBlob -SrcContainer $containerName -SrcBlob "example/data/sample.log" -Context $destContext -DestContainer $containerName -destBlob "$destFolder/data/sample.log" -DestContext $destContext
}

function prepareSQLDatabase()
{
    # SQL query string for creating log4jLogsCount table
    $cmdCreateLog4jCountTable = " CREATE TABLE [dbo].[$sqlDatabaseTableName](
            [Level] [nvarchar](10) NOT NULL,
            [Total] float,
        CONSTRAINT [PK_$sqlDatabaseTableName] PRIMARY KEY CLUSTERED   
        (
        [Level] ASC
        )
        )"

    #Create the log4jLogsCount table
    Write-Host "Create Log4jLogsCount table ..." -ForegroundColor Green
    $conn = New-Object System.Data.SqlClient.SqlConnection
    $conn.ConnectionString = "Data Source=$sqlDatabaseServer.database.windows.net;Initial Catalog=$sqlDatabaseName;User ID=$sqlDatabaseLogin;Password=$sqlDatabaseLoginPassword;Encrypt=true;Trusted_Connection=false;"
    $conn.open()
    $cmd = New-Object System.Data.SqlClient.SqlCommand
    $cmd.connection = $conn
    $cmd.commandtext = $cmdCreateLog4jCountTable
    $cmd.executenonquery()

    $conn.close()
}

# make a copy of example/data/sample.log to example/data/log4j/sample.log
prepareHiveDataFile;

# create log4jlogsCount table on SQL database
prepareSQLDatabase;