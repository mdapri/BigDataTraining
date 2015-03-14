$clusterName = "mdhdinsight"
$sqlDatabaseServerName  = Get-AzureSqlDatabaseServer|%{$_.ServerName}
#$sqlDatabaseServerName="$sqlDatabaseServerName.database.windows.net"

$sqlDatabaseUserName = "mdadmin"
$sqlDatabasePassword = "Av@nade001"
$sqlDatabaseDatabaseName = "clouddb"
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

#at first execution
#Cluster         : mdhdinsight
#ExitCode        : 0
#Name            : 
#PercentComplete : map 100% reduce 0%
#Query           : export --connect jdbc:sqlserver://x1cdahtrtq.database.windows.net;user=mdadmin@x1cdahtrtq;password=Av@nade001;database=clouddb --table 
#                  GrossDomesticProduct --export-dir /data/gdp --input-fields-terminated-by \t
#State           : Completed
#StatusDirectory : a266e645-a8da-4faa-9da3-0ac364413525
#SubmissionTime  : 14/03/2015 11.35.36
#JobId           : job_1426330974518_0003
#
#15/03/14 11:35:48 INFO sqoop.Sqoop: Running Sqoop version: 1.4.4.2.1.11.0-2316
#15/03/14 11:35:49 INFO manager.SqlManager: Using default fetchSize of 1000
#15/03/14 11:35:49 INFO tool.CodeGenTool: Beginning code generation
#15/03/14 11:35:50 INFO manager.SqlManager: Executing SQL statement: SELECT t.* FROM [GrossDomesticProduct] AS t WHERE 1=0
#15/03/14 11:35:50 INFO orm.CompilationManager: HADOOP_MAPRED_HOME is C:\apps\dist\hadoop-2.4.0.2.1.11.0-2316
#Note: \tmp\sqoop-hdp\compile\e2d5c63a869fe95f7d954c5752c94569\GrossDomesticProduct.java uses or overrides a deprecated API.
#Note: Recompile with -Xlint:deprecation for details.
#15/03/14 11:35:53 INFO orm.CompilationManager: Writing jar file: \tmp\sqoop-hdp\compile\e2d5c63a869fe95f7d954c5752c94569\GrossDomesticProduct.jar
#15/03/14 11:35:53 INFO mapreduce.ExportJobBase: Beginning export of GrossDomesticProduct
#SLF4J: Class path contains multiple SLF4J bindings.
#SLF4J: Found binding in [jar:file:/C:/apps/dist/hadoop-2.4.0.2.1.11.0-2316/share/hadoop/common/lib/slf4j-log4j12-1.7.5.jar!/org/slf4j/impl/StaticLoggerBinder.class]
#SLF4J: Found binding in [jar:file:/C:/apps/dist/hbase-0.98.0.2.1.11.0-2316-hadoop2/lib/slf4j-log4j12-1.6.4.jar!/org/slf4j/impl/StaticLoggerBinder.class]
#SLF4J: See http://www.slf4j.org/codes.html#multiple_bindings for an explanation.
#SLF4J: Actual binding is of type [org.slf4j.impl.Log4jLoggerFactory]
#15/03/14 11:35:53 INFO Configuration.deprecation: mapred.jar is deprecated. Instead, use mapreduce.job.jar
#15/03/14 11:35:54 INFO Configuration.deprecation: mapred.reduce.tasks.speculative.execution is deprecated. Instead, use mapreduce.reduce.speculative
#15/03/14 11:35:54 INFO Configuration.deprecation: mapred.map.tasks.speculative.execution is deprecated. Instead, use mapreduce.map.speculative
#15/03/14 11:35:54 INFO Configuration.deprecation: mapred.map.tasks is deprecated. Instead, use mapreduce.job.maps
#15/03/14 11:35:55 INFO impl.TimelineClientImpl: Timeline service address: http://headnodehost:8188/ws/v1/timeline/
#15/03/14 11:35:55 INFO client.RMProxy: Connecting to ResourceManager at headnodehost/100.74.136.79:9010
#15/03/14 11:35:56 INFO client.AHSProxy: Connecting to Application History server at headnodehost/100.74.136.79:10200
#15/03/14 11:36:01 INFO input.FileInputFormat: Total input paths to process : 1
#15/03/14 11:36:01 INFO input.FileInputFormat: Total input paths to process : 1
#15/03/14 11:36:02 INFO mapreduce.JobSubmitter: number of splits:4
#15/03/14 11:36:02 INFO mapreduce.JobSubmitter: Submitting tokens for job: job_1426330974518_0004
#15/03/14 11:36:02 INFO mapreduce.JobSubmitter: Kind: mapreduce.job, Service: job_1426330974518_0003, Ident: (org.apache.hadoop.mapreduce.security.token.JobTokenIdentifie
#r@74510dba)
#15/03/14 11:36:02 INFO mapreduce.JobSubmitter: Kind: RM_DELEGATION_TOKEN, Service: 100.74.136.79:9010, Ident: (owner=mdadmin, renewer=mr token, realUser=hdp, issueDate=1
#426332921665, maxDate=1426937721665, sequenceNumber=2, masterKeyId=2)
#15/03/14 11:36:03 INFO impl.YarnClientImpl: Submitted application application_1426330974518_0004
#15/03/14 11:36:03 INFO mapreduce.Job: The url to track the job: http://headnodehost:9014/proxy/application_1426330974518_0004/
#15/03/14 11:36:03 INFO mapreduce.Job: Running job: job_1426330974518_0004
#15/03/14 11:36:18 INFO mapreduce.Job: Job job_1426330974518_0004 running in uber mode : false
#15/03/14 11:36:18 INFO mapreduce.Job:  map 0% reduce 0%
#15/03/14 11:36:31 INFO mapreduce.Job:  map 25% reduce 0%
#15/03/14 11:36:33 INFO mapreduce.Job:  map 75% reduce 0%
#15/03/14 11:36:36 INFO mapreduce.Job:  map 100% reduce 0%
#15/03/14 11:36:37 INFO mapreduce.Job: Job job_1426330974518_0004 completed successfully
#15/03/14 11:36:37 INFO mapreduce.Job: Counters: 31
#	File System Counters
#		FILE: Number of bytes read=0
#		FILE: Number of bytes written=445912
#		FILE: Number of read operations=0
#		FILE: Number of large read operations=0
#		FILE: Number of write operations=0
#		WASB: Number of bytes read=178027
#		WASB: Number of bytes written=0
#		WASB: Number of read operations=0
#		WASB: Number of large read operations=0
#		WASB: Number of write operations=0
#	Job Counters 
#		Launched map tasks=4
#		Other local map tasks=3
#		Rack-local map tasks=1
#		Total time spent by all maps in occupied slots (ms)=36903
#		Total time spent by all reduces in occupied slots (ms)=0
#		Total time spent by all map tasks (ms)=36903
#		Total vcore-seconds taken by all map tasks=36903
#		Total megabyte-seconds taken by all map tasks=28341504
#	Map-Reduce Framework
#		Map input records=900
#		Map output records=900
#		Input split bytes=626
#		Spilled Records=0
#		Failed Shuffles=0
#		Merged Map outputs=0
#		GC time elapsed (ms)=118
#		CPU time spent (ms)=6329
#		Physical memory (bytes) snapshot=490807296
#		Virtual memory (bytes) snapshot=1021370368
#		Total committed heap usage (bytes)=570425344
#	File Input Format Counters 
#		Bytes Read=0
#	File Output Format Counters 
#		Bytes Written=0
#15/03/14 11:36:38 INFO mapreduce.ExportJobBase: Transferred 0 bytes in 43.3043 seconds (0 bytes/sec)
#15/03/14 11:36:38 INFO mapreduce.ExportJobBase: Exported 900 records.