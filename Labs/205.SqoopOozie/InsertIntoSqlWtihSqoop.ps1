$clusterName = "mdhdinsigth"
$sqlDatabaseServerName = "x1cdahtrtq"
$sqlDatabaseUserName = "mdadmin"
$sqlDatabasePassword = "Av@nade001"
$sqlDatabaseDatabaseName = "mdclouddb"
$tableName = "GrossDomesticProduct"
$hdfsPath = "/data/gdp"
$user = "$sqlDatabaseUserName@$sqlDatabaseServerName"
$serverPath = "sqlserver://$sqlDatabaseServerName.database.windows.net"
# Create a Sqoop job
$sqoopCommand = "export --connect jdbc:$serverPath;"
$sqoopCommand += "user=$user;password=$sqlDatabasePassword;database=$sqlDatabaseDatabaseName”
$sqoopCommand += " --table $tableName --export-dir $hdfsPath --input-fields-terminated-by \t"
$sqoopDef = New-AzureHDInsightSqoopJobDefinition -Command $sqoopCommand
# Submit the Sqoop job
$sqoopJob = Start-AzureHDInsightJob -Cluster $clusterName -JobDefinition $sqoopDef
Write-Host "Sqoop job submitted..."
Wait-AzureHDInsightJob -WaitTimeoutInSeconds 3600 -Job $sqoopJob
Get-AzureHDInsightJobOutput -Cluster $clusterName -JobId $sqoopJob.JobId -StandardError