#HDInsight cluster variables
$clusterName = "mdhdinsight"
$clusterUsername = "mdadmin"
$clusterPassword = "Av@nade001"

#Azure Blob storage variables
$storageAccountName = "mdbigdata"
$storageContainerName = "mdbigdata"
$storageUri="wasb://$storageContainerName@$storageAccountName.blob.core.windows.net"

#Azure SQL database variables
$sqlDatabaseServer = Get-AzureSqlDatabaseServer| %{$_.ServerName} 
$sqlDatabaseLogin = "mdadmin"
$sqlDatabaseLoginPassword = "Av@nade001"
$sqlDatabaseName = "hdinsight_meta"  


#Oozie WF variables
$oozieWFPath="$storageUri/tutorials/useoozie"  # The default name is workflow.xml. And you don't need to specify the file name.
$waitTimeBetweenOozieJobStatusCheck=10

#Hive action variables
$hiveScript = "$storageUri/tutorials/useoozie/useooziewf.hql"
$hiveTableName = "log4jlogs"
$hiveDataFolder = "$storageUri/tutorials/useoozie/data"
$hiveOutputFolder = "$storageUri/tutorials/useoozie/output"

#Sqoop action variables
$sqlDatabaseConnectionString = "jdbc:sqlserver://$sqlDatabaseServer.database.windows.net;user=$sqlDatabaseLogin@$sqlDatabaseServer;password=$sqlDatabaseLoginPassword;database=$sqlDatabaseName"
$sqlDatabaseTableName = "log4jLogsCount"

$passwd = ConvertTo-SecureString $clusterPassword -AsPlainText -Force
$creds = New-Object System.Management.Automation.PSCredential ($clusterUsername, $passwd)


#OoziePayload used for Oozie web service submission
$OoziePayload =  @"
<?xml version="1.0" encoding="UTF-8"?>
<configuration>

   <property>
       <name>nameNode</name>
       <value>$storageUrI</value>
   </property>

   <property>
       <name>jobTracker</name>
       <value>jobtrackerhost:9010</value>
   </property>

   <property>
       <name>queueName</name>
       <value>default</value>
   </property>

   <property>
       <name>oozie.use.system.libpath</name>
       <value>true</value>
   </property>

   <property>
       <name>hiveScript</name>
       <value>$hiveScript</value>
   </property>

   <property>
       <name>hiveTableName</name>
       <value>$hiveTableName</value>
   </property>

   <property>
       <name>hiveDataFolder</name>
       <value>$hiveDataFolder</value>
   </property>

   <property>
       <name>hiveOutputFolder</name>
       <value>$hiveOutputFolder</value>
   </property>

   <property>
       <name>sqlDatabaseConnectionString</name>
       <value>&quot;$sqlDatabaseConnectionString&quot;</value>
   </property>

   <property>
       <name>sqlDatabaseTableName</name>
       <value>$SQLDatabaseTableName</value>
   </property>

   <property>
       <name>user.name</name>
       <value>$clusterUsername</value>
   </property>

   <property>
       <name>oozie.wf.application.path</name>
       <value>$oozieWFPath</value>
   </property>

</configuration>
"@

#check service status
Write-Host "Checking Oozie server status..." -ForegroundColor Green
$clusterUriStatus = "https://$clusterName.azurehdinsight.net:443/oozie/v2/admin/status"
$response = Invoke-RestMethod -Method Get -Uri $clusterUriStatus -Credential $creds -OutVariable $OozieServerStatus 

$jsonResponse = ConvertFrom-Json (ConvertTo-Json -InputObject $response)
$oozieServerSatus = $jsonResponse[0].("systemMode")
Write-Host "Oozie server status is $oozieServerSatus..."

##### from now on uses the web service to run the oozie job
# create Oozie job
Write-Host "Sending the following Payload to the cluster:" -ForegroundColor Green
Write-Host "`n--------`n$OoziePayload`n--------"
$clusterUriCreateJob = "https://$clusterName.azurehdinsight.net:443/oozie/v2/jobs"
$response = Invoke-RestMethod -Method Post -Uri $clusterUriCreateJob -Credential $creds -Body $OoziePayload -ContentType "application/xml" -OutVariable $OozieJobName #-debug

$jsonResponse = ConvertFrom-Json (ConvertTo-Json -InputObject $response)
$oozieJobId = $jsonResponse[0].("id")
Write-Host "Oozie job id is $oozieJobId..."

# start Oozie job
Write-Host "Starting the Oozie job $oozieJobId..." -ForegroundColor Green
$clusterUriStartJob = "https://$clusterName.azurehdinsight.net:443/oozie/v2/job/" + $oozieJobId + "?action=start"
$response = Invoke-RestMethod -Method Put -Uri $clusterUriStartJob -Credential $creds | Format-Table -HideTableHeaders #-debug

# get job status
Write-Host "Sleeping for $waitTimeBetweenOozieJobStatusCheck seconds until the job metadata is populated in the Oozie metastore..." -ForegroundColor Green
Start-Sleep -Seconds $waitTimeBetweenOozieJobStatusCheck

Write-Host "Getting job status and waiting for the job to complete..." -ForegroundColor Green
$clusterUriGetJobStatus = "https://$clusterName.azurehdinsight.net:443/oozie/v2/job/" + $oozieJobId + "?show=info"
$response = Invoke-RestMethod -Method Get -Uri $clusterUriGetJobStatus -Credential $creds 
$jsonResponse = ConvertFrom-Json (ConvertTo-Json -InputObject $response)
$JobStatus = $jsonResponse[0].("status")

while($JobStatus -notmatch "SUCCEEDED|KILLED")
{
    Write-Host "$(Get-Date -format 'G'): $oozieJobId is in $JobStatus state...waiting $waitTimeBetweenOozieJobStatusCheck seconds for the job to complete..."
    Start-Sleep -Seconds $waitTimeBetweenOozieJobStatusCheck
    $response = Invoke-RestMethod -Method Get -Uri $clusterUriGetJobStatus -Credential $creds 
    $jsonResponse = ConvertFrom-Json (ConvertTo-Json -InputObject $response)
    $JobStatus = $jsonResponse[0].("status")
}

Write-Host "$(Get-Date -format 'G'): $oozieJobId is in $JobStatus state!" -ForegroundColor Green