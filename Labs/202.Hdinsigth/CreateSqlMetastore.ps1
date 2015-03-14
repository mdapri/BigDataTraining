#reference http://azure.microsoft.com/blog/2013/02/07/windows-azure-sql-database-management-with-powershell/
# the subscription has already been set up on this machine, otherwise follow the steps to get a certificate and set the subscription
#Import-AzurePublishSettingsFile "C:\\Kits\\Windows Azure  MSDN - Visual Studio Premium-12-14-2014-credentials.publishsettings"

#$subscription=Get-AzureSubscription
$subscriptionName="Windows Azure  MSDN - Visual Studio Premium"
Set-AzureSubscription -SubscriptionName $subscriptionName
#database server already exists
$serverName = Get-AzureSqlDatabaseServer|%{$_.ServerName}
##credentials
$username="mdadmin"
$password="Av@nade001"

$currentIp ="151.66.236.209"
#add the IP to the firewall rule
New-AzureSqlDatabaseServerFirewallRule -ServerName $serverName -RuleName “mdadmin_rule” -StartIPAddress $currentIp -EndIPAddress $currentIp
#create credentials
$servercredential = new-object System.Management.Automation.PSCredential($username, ($password  |    ConvertTo-SecureString -asPlainText -Force))

#create a connection context
$ctx =  New-AzureSqlDatabaseServerContext -ServerName $serverName -Credential $serverCredential
## database creation 
$databaseName="hdinsight_meta"
#note that the contesxt should be used
New-AzureSqlDatabase -ConnectionContext $ctx  -DatabaseName $databaseName -MaxSizeGB 1


