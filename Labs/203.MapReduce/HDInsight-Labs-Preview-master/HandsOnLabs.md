<a name="Title" />
#HDInsight Hands On Labs#

---
<a name="Overview" />
## Overview ##

During these hands-on labs, you discover several ways to run MapReduce jobs across an HDInsight cluster. HDInsight is a new Windows Azure service built on the Hadoop distribution and harnesses the power of Azure and Hadoop to solve your Big Data needs.

The Labs include programatically connecting to your cluster to run C# and F# MapReduce jobs, running Javascript MapReduce functions at the Javascript Interactive Console, chaining MapReduce jobs together for additional transformations, running HiveQL at the Hive Interactive Console, generating the MapReduce jobs directly from within Excel via the Hive ODBC driver and finally using Mahout for machine learning. 


* [Lab 1](#Lab1) creates a MapReduce job in [C#](#Lab1TaskA), [javascript](#Lab1TaskB) and [F#](#Lab1TaskC) then runs the job on an Azure cluster using HDInsight. 

* [Lab 2](#Lab2) chains multiple MapReduce jobs together.

* [Lab 3](#Lab3) imports tab separated data into an Azure cluster using Hive-based connectivity and then analyses the data using HiveQL. 

* [Lab 4](#Lab4) uses the Hive ODBC driver to export data from an HDInsight cluster into Excel then visualise the data using PivotTable and PivotChart.

* [Lab 5](#Lab5) demonstrates how to use Mahout to build a recommendation engine using collaborative filtering. 


<a name="Prerequisites" />
### Prerequisites ###

You must have an account to access HDInsight on Azure and an HDInsight cluster already created and backed by an Azure Storage Account. You may request for an invitation [here](http://www.hadooponazure.com). To create a HDInsight cluster, follow the instructions outlined in the _Getting Started_ Appendix.  

These Labs were prepared by using an HDInsight cluster called '_handsonlabs_' which is backed by an Azure Storage Account called '_joydivision_'. HDInsight storage built on Azure Blob Storage, however, in the context of HDInsight this is known as the Azure Storage Vault & uses an ASV protocol.

<a name="Exercises"/>
## Labs ##

### The scenario ###

Labs 1-4 use the power of HDInsight to analyse the web traffic of an imaginary e-commerce company. 

The company started in the USA and, whilst the USA still accounts for the majority of its revenue, they are interested in discovering how their products are selling in their European markets compared to the U.S. They are also  particularly interested in which are the fastest growing markets as indicated by a high percentage of purchases from new users. 

### The data ###

The dataset used for the labs, clickStream.log, contains ~100,000 rows of tab delimited with the following fields in the following order:

* Date & time of the hit.
* The ProductId of the product involved in the action.
* The user's classification according to the company database (New, Regular or Infrequent).
* The country code of the origin of the request.
* The referrer of the hit(Adword, Organic Search or No Referrer). 
* The user action (Purchase, Add to Cart, Search or View Product). 

	![sample of clickStream data](images/sample-of-clickstream-data.png?raw=true)
	
	
	_**Uploading the data file into our HDInsight cluster**_

	The data may be uploaded to the Azure Storage Vault backing our HDInsight cluster by using the HDInsight Javascript Interactive Console. Go to the HDInsight web portal of your cluster, https://{Your Cluster Name}.azurehdinsight.net/ and choose the Interactive Console:

	![JavascriptConsoleFromHome](images/javascriptconsolefromhome.png?raw=true)

	The Javascript Console is a command shell that provides a fluent interface to interact with the cluster.
We can upload our MapReduce javascript job to our Azure Storage Vault by using the fs.put() command:

	![Uploading the file](images/uploading-the-file.png?raw=true)

---
<a name="Lab1" />
### Lab 1: Creating, testing & executing a MapReduce programs using HDInsight ###

_Objective_ 
In this lab you will learn how to create, test and run MapReduce programs on HDInsight.

Each task uses a different language in order to sum the number of purchases made in each country across the 4 days as well as calculate what percentage of these purchases were made by new customers. For the sake of brevity, we shall henceforth refer to this job as the 'AggregatePurchase' job.

<a name="Lab1TaskA" />
#### Task A - Create, test & execute a MapReduce program in C#  ####

Start by creating a new C# solution with both a console application as well as a test project, then:

1. **Prepare the solution**.
	
	Using the NuGet Package Manager, search the online packages for 'hadoop' and 'Install' the Microsoft.Hadoop.MapReduce package into both the Console project & the Test project, accepting the Terms & Conditions presented during install.

	![Adding the HDInsight assemblies to your project](images/adding-the-hdinsight-assemblies-to-your-proje.png?raw=true)

	This configures your console application with all the assemblies required to author and run MapReduce programs including: microsoft.hadoop.mapreduce which contains the base classes for authoring MapReduce jobs; microsoft.hadoop.webclient which allows your MapReduce job to be remotely submitted to your HDInsight cluster and then monitored using REST API calls.

	A folder called 'mrlib' is also added to your project. This contains all the drivers required to execute a MapReduce program.   

1. **Create tests for the Mapper**.

	As good TDD citizens, we shall first create some unit tests for the Mapper class that we shall soon write and benefit from the satisfying Red-Green approach to testing. 

	The HDInsight SDK provides a debugging framework called StreamingUnit to allow in-process debugging into MapReduce programs. This allows us to execute a mapper class, or a mapper and reducer pair of classes, and  examine the key value output that would normally be streamed to Hadoop when running the classes through HDInsight.

	The code snippet below illustrates passing different input strings to our future mapper and using the streaming unit to execute the mapper and assert the correct output from the mapper.

	![Using the Streaming unit to test a Mapper](images/using-the-streaming-unit-to-test-a-mapper.png?raw=true) 

	To get the test compiling we will create an empty AggregatePurchaseMapper class then run the test and observe its failure. 

1. **Create the Mapper**.

	Now let's implement the AggregatePurchaseMapper class by deriving from MapperBase and overriding the Map function with our custom logic to filter all data concerning purchases and map the matches to a key value pair where the country is the key and the user type is the key. The emitted key value will server as the input to the Reducer we shall soon write. 

	![A Mapper class to filter purchase data](images/a-mapper-class-to-filter-purchase-data.png?raw=true)

	Note that it is possible to increment Hadoop counters by calling IncrementCounter (which exists on ContextBase derived classes). Here we are incrementing one of a pair of counter classified as 'HitMissProgress' to indicate whether this input contained purchase data. These counters are summed across all nodes involved in the execution of the hadoop job and can be seen to be incrementing whilst running by remoting onto the head node of the HDInsight cluster. Consequently, this provides a near real-time insight into the operational status & progress  of the remotely running job.


	Running all the Mapper tests created in the previous step should now all pass and show up as green.

	![Passing Mapper tests](images/passing-mapper-tests.png?raw=true)

1. **Create tests for the Reducer**.

	The StreamingUnit may also be used to test our future Reducer in a similar way as we tested out Mapper logic. The difference is that the Reducer must be tested in combination with the Mapper as is shown below.

	![Testing the Reducer](images/testing-the-reducer.png?raw=true)

1. **Create the Reducer**.

	To implement the AggregatePurchaseReducer we will subclass ReducerCombinerBase & override its Reduce method with our logic to count the number of purchases for a particular country which is particularly easy given that the data passed to our Reducer is keyed on country. We will also calculate the percentage of those purchases made by filtering the values matching 'New'. 

	![Creating the AggregatePurchaseReducer](images/creating-the-aggregatepurchasereducer.png?raw=true)
	
	Note that becuase we want our Reducer to emit multiple values (i.e. both the count of purchases as well as the percentage of new purchases) for each country, we using a custom extension method to emit a tab separated string as the Reducer output value. 

	![String Utility helper](images/string-utility-helper.png?raw=true)

	Our Reducer tests now pass.
	

1. **Creating a Hadoop job based on our Mapper & Reducer**.

	Now that we have Mapper & Reducer classes ready and tested let's create a Hadoop job to run them and configure it to use locations in our Azure Storage Vault that is backing our HDInsight cluster as its input and output. 
	Note that HDInsight will not overwrite an existing file when attempting to write the output so please ensure the ouput path is unique for each execution of the job. 

	![Creating a MapReduce job](images/creating-a-mapreduce-job.png?raw=true)

	The Azure Storage Vault URL will be in the format "asv://{Container Name}@{Storage Account Name}.blob.core.windows.net" using the Storage Account that was assigned to the HDInsight cluster during its creation.
	

1. **Running the Hadoop job remotely on the HDInsight cluster**.

	Finally, we can use the code below to connect to HDInsight and execute our job on the cluster.

	![Connecting to HDInsight](images/connecting-to-hdinsight.png?raw=true)

	During execution, http traffic to the HDInsight Templeton endpoint may be observed such as that shown below captured using Fiddler. 

	![Templeton http traffic](images/templeton-http-traffic.png?raw=true)

	Command line output will look like the following which shows the location of the output file which we configured in our MapReduce job:
	
	![joboutput](images/joboutput.png?raw=true)

	Job progression can be viewed by remoting onto the name node of the HDInsight cluster. Go to the HDInsight web portal & use the remote desktop box to download an rdp connection that allows you to logon to the name node.

	![Remoting onto HDInsight Head Node](images/remoting-onto-hdinsight-head-node.png?raw=true)

	and then using the Job portal that is present on the desktop...

	![JobWebPortal](images/jobwebportal.png?raw=true)

	![JobPortal2](images/jobportal2.png?raw=true)

	![Running Jobs](images/running-jobs.png?raw=true)

	Note that by drilling into a particular job we can view considerable diagnostics information, including the new Counters we increment in our Mapper in Step 3.

	![Job Stats](images/job-stats.png?raw=true)

1. **Viewing the results from our MapReduce job**.	

	The results from our MapReduce job can be viewed by one of the following ways:

	i) _Using the Javascript Interactive Console_.
	
	From the HDInsight web portal of your cluster navigate to the Javascript Interactive Console. 
You can navigate to the output folder configured in the MapReduce job in step 6 as follows:

	![navigatingInJS](images/navigatinginjs.png?raw=true)

	and then output the contents via the following command:

	![outputOnJS](images/outputonjs.png?raw=true)

	

	ii) _Using an External Tool_.

	A tool, such as Cerebrata's Cloud Storage Studio may be used to browse the Azure Storage Vault configured for your HDInsight Cluster and download any blobs.

	![Cloud Storage Studio](images/cloud-storage-studio.png?raw=true)

---
	
<a name="Lab1TaskB" />
#### Task B - Create, test & execute a MapReduce program in Javascript  ####

In this task, you will create a MapReduce job in javascript and run it using the fluent API layered on Pig that is provided by the javascript Interactive Console. 

HDInsight expects Mapper & Reducer functions to follow the following signatures respectively:

	var map = function (key, value, context)
	var reduce = function (key, values, context)


1. **Create tests for the Mapper & Reducer**. 

	You can use the qunit test framework (http://www.qunitjs.com/) in order to create unit tests for our mapper & reducer which we can then run and debug inside a browser. 

	In order to unit test our functions, we must create a fake context to pass to the Mapper & Reducer as they will write their outputs to this context. 

	![fake context writer](images/fake-context-writer.png?raw=true)

	The values parameter accepted by the Reducer must also be faked by an object that has an iterator if we are to unit test our Reducer. 

	![fake reducer values](images/fake-reducer-values.png?raw=true)

	The tests can then be created as below and positioned inside the script tags of a simple html page to run when the DOM is loaded.

	![Mapper and Reducer tests](images/mapper-and-reducer-tests.png?raw=true)


1. **Create the Mapper & Reducer**.

	You can create an implementation of a MapReduce job in javascript by creating a map & reduce function as shown below.

	![implementaion of map & reduce functions](images/implementaion-of-map-reduce-functions.png?raw=true)

	Rerunning our qunit tests in the browser now pass.

	![qunit tests passing](images/qunit-tests-passing.png?raw=true)


1. **Run the MapReduce Javascript job on the HDInsight cluster**.

	Upload our MapReduce javascript file containing our Mapper & Reducer to our Azure Storage Vault by using the fs.put() command at the Javascript Interactive Console (like how we uploaded the original data file).

	Then use the following command to run the uploaded javascript MapReduce job:

	`
pig.from("/handsonlabs/data/clickStream.log").mapReduce("/handsonlabs/lab1/javascript/Lab1MapReduce.js", "country, counts").to("/handsonlabs/lab1/javascript/output")`

	![Running pig latin job](images/running-pig-latin-job.png?raw=true)
	Scroll to the right and click on **View Log** if you want to observe the details of the job's progress. This log will also provide diagnostics if the job fails to complete. 

	![View Log](images/view-log.png?raw=true)
	_The View Log_

1. Displaying the output from our MapReduce job can be achieved from the Javascript Interactive Console using the fs.read command with the created output file specified `file = fs.read("/handsonlabs/lab1/javascript/AggregatePurchaseResults/part-00000")` at the **js>** prompt.

---
<a name="Lab1TaskC" />
#### Task C - Create, test & execute a MapReduce program in F#  ####

In this task, you will create a MapReduce job in F# and run it remotely on your HDInsight cluster. 


1. **Prepare the F# solution**.

	Create a new F# Console project and, similar to how we prepared our C# project in Task A, use the NuGet Library Package Manager to install the Mircosoft Map Reduce API assemblies to our project.

	For simplicity, all the functions required for our MapReduce job can be placed in the same F# file which should import the following .Net namespaces:

	![F# file imports](images/f-file-imports.png?raw=true)
	

1. **Create the Mapper**.

	Our Mapper must inherit MapperBase and override the Map function with our logic to extract the purchase data.

	![Mapper in F#](images/mapper-in-f.png?raw=true)


1. **Create the Reducer**.

	Our Reducer must inherit ReducerCombinerBase and override the Reduce function with the same reducer logic we are using in each Task.

	![Reducer in F#](images/reducer-in-f.png?raw=true)


1. **Create the MapReduce job**.

	Next create a Hadoop job typed on our Mapper & Reducer with the input & output path configured appropriately.
 
	![MapReduce job in F#](images/mapreduce-job-in-f.png?raw=true)


1. **Run the MapReduce job programmatically**

	Finally, we can use the code below to connect to the remote HDInsight and execute our job on the cluster

	![Running the F# MapReduce job](images/running-the-f-mapreduce-job.png?raw=true)

---

<a name="Lab2"/>
### Lab 2: Chaining MapReduce jobs together ###

_Objective_ 
In this lab, you will run a futher MapReduce job on the output of the AggregatePurchases MapReduce job created in Lab1 to count the number of purchases made by new users in each continent.

1. **Create a new Mapper, Reducer & Job**.

	Create a second MapReduce job that takes the output results of Lab1 and maps these to each continent and then reduces the data to output the total number of purchases in each continent made by new users. 

	The Mapper and Reducer can be built and tested following the same pattern as that used in Lab1. 

	The Mapper would filter by continent and calculate the number of new users for each data row:
	![Continent Mapper](images/continent-mapper.png?raw=true)

	The Reducer would simply sum the mapper values:
	![Continent reducer](images/continent-reducer.png?raw=true)

	The important point is that the output of the first job must be configured as the input to the second job either by passing context to the job via arguments to the hadoop.MapReduceJob.ExecuteJob method or by hardcoding.

	

1. **Running the jobs sequentially**. 

	It's now as simple as executing each job in order.

	![Running multiple MapReduce job](images/running-multiple-mapreduce-job.png?raw=true)


1. **Viewing the output of the chained jobs**.

	Using the Javascript Interactive Console to view the results reveals the following:
	![Lab 2 results](images/lab-2-results.png?raw=true)

---

<a name="Lab3"/>
### Lab 3: Running a MapReduce using Hive ###

_Objective_ 
This lab will demonstrate how you can output the same aggregate purchase data by writing HiveQL, an SQL dialect, in the Hive Interactive Console of your HDInsight cluster. Hive is a data warehouse framework, built on top of Hadoop, that provides data management, querying, and analysis. 

1.	** Create a Hive External data table **.

	We will create an External table from the clickStream.log data file already stored in our Azure Storage Vault (ASV). We are creating an 'External' Hive table as this won't import all the data into the Hive warehouse but instead will superimpose a schema on top of our existing data stored in ASV. In contrast, a regular Hive table imports all data into the Hive warehouse.

	The command below creates our External Hive table:

	![Creating a Hive External table](images/creating-a-hive-external-table.png?raw=true)

	![hive table created successfully](images/hive-table-created-successfully.png?raw=true)

	We can ensure the successful creation of the schema for our table by using the dropdowns in the Console to view our table columns. 

	![Hive schema](images/hive-schema.png?raw=true)

	We could check that the data is queryable by issuing a simple select statement at the Hive console.

2. ** Writing HiveQL to MapReduce our Purchase data**.

	The HiveQL to extract our aggregate purchase data is shown below:
		
	![HiveQL](images/hiveql.png?raw=true)
	
	Note that under the covers Hive is generating appropriate MapReduce jobs for the HiveQL and running the jobs across our HDInsight cluster.

	![HiveQL output](images/hiveql-output.png?raw=true)

	As can be seen, we get the same results as we did from our MapReduce job created in Lab 1. 

---
<a name="Lab4"/>
### Lab 4: Connecting to and Querying Hive Data in a Cluster using Excel ###

_Objective_ 
In this lab, you will connect Excel to the Hive data warehouse framework of an HDInsight Hadoop cluster via the Hive Open Database Connectivity (ODBC) driver. 

1. **Install the Hive ODBC Driver**.

	Choose 'Download' from the cluster dashboard on the HDInsight portal to bring up the links for downloading the Hive ODBC driver MSIs and select the appropriate one. 

	![Downloading the Hive ODBC driver](images/downloading-hiveodbc.png?raw=true "Downloading the Hive ODBC driver")

	_Downloading the Hive ODBC driver and Add-in for Excel_

	After downloading run the install and select the **Run anyway** option from the **SmartScreen Filter** window that pops up.
  
	![Selecting the Run anyway option](images/selecting-the-runanyway-option.png?raw=true "Selecting the Run anyway option")

	_Selecting the Run anyway option_

1. **Create a Hive ODBC Data Source**.

	i) Go to the System and Security->Administrative Tools and click Data Sources (ODBC) if you are using Windows 7 or ODBC Data Sources if you are using Windows 8. This will launch the ODBC Data Source Administrator dialog.

	![Admin Tools](images/admin-tools.png?raw=true)

	ii) Click Add to add a new data source on the User DSN tab.

	![odbc](images/odbc.png?raw=true)

	iii) Select 'Hive' & Click the Finish button. This will launch the Hive Data Source Configuration dialog.

	![hive odbc](images/hive-odbc.png?raw=true)

	iv) Complete the data as appropriate for your HDInsight cluster and OK everything.

1. **Import Data into Excel**.

	i) From an Excel workbook, click the Data tab and from the 'Get External Data' tile, select 'From Other Data Sources' -> 'From Data Connection Wizard' to launch the Data Connection Wizard.

	![Data Connection Wizard](images/data-connection-wizard.png?raw=true)

	ii) Click next with 'ODBC DSN' selected.

	![creating the connection](images/creating-the-connection.png?raw=true)

	iii) In the Connect to ODBC Data Source dialog, select the Data Source name that you created in the previous step (in our example, myHiveData) and click Next.

	![Selecting your Hive datasource](images/selecting-your-hive-datasource.png?raw=true)

	iv) In the Hive Data Source Configuration dialog, enter the password for the cluster and click OK.

	![Entering pwd to your Hive data source](images/entering-pwd-to-your-hive-data-source.png?raw=true)

	v) When the Select Database and Table dialog in the Data Connection Wizard opens, select the table that you want to import (here, for example, the default database and table "clickstreamdata") and click Next.

	![Slecting the Database and Table](images/slecting-the-database-and-table.png?raw=true)

	vi) When the Save Data Connection File and Finish dialog in the Data Connection Wizard opens, click the Finish button.

	![finish step](images/finish-step.png?raw=true)

	vii) In the Import Data dialog which now opens, you can change or specify the query. To do so, click Properties to launch the Connection Properties dialog.

	![import data ](images/import-data.png?raw=true)

	viii) We can enter our HiveQL into the 'Command text' box to run MapReduce jobs straight from Excel and only import their output:

	
	![Import with Hive query](images/import-with-hive-query.png?raw=true)

	ix) In the Import Data popup that then appears, seelct to create a PivotChart & PivotTable report:

	![importing data into a pivotchart](images/importing-data-into-a-pivotchart.png?raw=true)

	Once the MapReduce jobs complete the PivotTable & PivotChart will be available.

	The PivotChart allows a visual way to illustrate some of the analytics we have derived from our MapReduce jobs. E.g. By using a Pie chart we can easily identify which country had the most purchases from new users across our 4 day period.

	![Pie chart showing % new users](images/pie-chart-showing-new-users.png?raw=true)

	Or by selecting other data output from our Mapreduce job we can show just how many more visits our U.S site receives.


	![Pivot Bar Chart](images/pivot-bar-chart.png?raw=true)



---
<a name="Lab5"/>
### Lab 5: Using Mahout to build a Recommendations Engine ###

_Objective_ 
This lab teaches how to use Mahout to build a recommendation engine for your users. 

There are several important considerations when working with large datasets. One common task is to be able to apply machine learning algorithms against the output of a map-reduce task. It is common now to be able to provide a recommendation engine for internet sites and is normal practice to use map-reduce to take a large data set and use the output to be able to feed into the engine.

The following lab will show how you can use both Mahout and Infer.NET to build a recommendation engine for your users. Both libraries support “Collaborative Filtering” but also support other popular use cases such as clustering and classification.

#### The Data ####

The dataset used in the Lab concerns movie ratings made by users and can be downloaded from 

<http://www.grouplens.org/system/files/ml-100k.zip>

The GroupLens data contains a file called ua.base which contains the training data for the recommendation. The file contains an extra column which is not native to Mahout processing format.

As our Collaborative Filtering technologies require the data to be in the format of (user id, item id, rating) triples we will use the skills learnt from the early Labs to write a MapReduce job consisting of a single Mapper to transform the data into the required format. The Mapper can consequently be implemented as the following:

![A Mapper to transform the movie data](images/a-mapper-to-transform-the-movie-data.png?raw=true)

We can now write a MapReduce job that is just built from our Mapper and run it on our HDInsight cluster. 

![Movie job](images/movie-job.png?raw=true)

Alternatively, due to the smallish size of our file we could use the HDInsight StreamingUnit to run our mapper locally and write to a local file like below:


![Using the StreamingUnit](images/using-the-streamingunit.png?raw=true)

The output from this map-reduce task we'll call MovieGroupLensData.log and can be loaded into a Mahout model directly from disk. We'll copy this file into the run directory when we debug the Mahout ptoject in Eclipse.

Now that we have our dataset ready we can proceed to our Machine Learning tasks. 



1. **Setting up Eclipse & Mahout**.

	To begin this lab you'll need to ensure that you have the JRE 1.6 which can be found here:

	<http://java.com/en/download/index.jsp>

	In order to use Mahout download the latest Maven build from here:

	<http://maven.apache.org/download.cgi>

	Then download the latest Eclipse build from here:

	http://www.eclipse.org/

	Then download the latest Mahout build from here (version 0.7):

	<http://mahout.apache.org/>

	Mahout can now be built from either Eclipse (use the Maven M2E plugin) or the command line. From the command line ensure that the maven directory is in your path. Then navigate to the mahout source directory where the pom.xml exists and enter:

	_mvn install_

	This will build Mahout and examples and execute all unit tests.

	A guide can be found here:

	<https://cwiki.apache.org/MAHOUT/buildingmahout.html>

	Mahout supports recommendations based on similarities between items and users and takes input in the form of _user, item, rating_.

	In this we’ll be looking at the Grouplens movie dataset, which contains line items in exactly the right form for the lab so that we can avoid any pre-processing steps. The following file contains 100Kb worth of data (or 100,000 ratings from 943 users for 1,682 movies!) 

1. Configuring the Mahout project	

	The properties of the Mahout project can be configured with 4 parameters to be passed into the Main method of the DPERecommender class.

	![Configuring with debug variables](images/configuring-with-debug-variables.png?raw=true)

	The parameters do as follows:

	1. The name of the file to be loaded into Mahout
	2. Either "slope" or "user" depending on the type of Recommender 
	3. The User id for the recommender to return the best fit items
	4. The number of return items and their best fit values to return

The Lab 5 Mahout project contains two classes of UserRecommendation. 

The first contains a standard UserRecommender which takes into account the nearest 100 neighbours of the particular user that is being queried and returns a best fit list of recommended items on a scale of 0.0 to 5.0. The latter being the closest fit.

![SlopeOneRecommendation](images/slopeonerecommendation.png?raw=true)

The SlopeOneRecommender uses pre-computation against the dataset and allows values to be easily updated dynamically for faster accurate performance of smaller datasets.

![User Recommendation](images/user-recommendation.png?raw=true)

Notice that the trace is available illustrating the number of lines read and distinct users from the file.

![trace results](images/trace-results.png?raw=true)

Whilst Mahout is not distrubuted with HDInsight it can be copied to the local nodes and a mahout workload can be distributed across the HDInsight cluster to a certain extent. In order to do this the output type for the Lab5 project should be a JAR file.

![Exporting a JAR](images/exporting-a-jar.png?raw=true)

More information can be found on the Apache Mahout website:

http://mahout.apache.org/

A good example of using a Recommender with Infer.NET can be found here:

http://research.microsoft.com/en-us/um/cambridge/projects/infernet/docs/Recommender%20System.aspx

Please note that Infer.NET cannot be used under a commercial license.


---

<a name="Summary" />
## Summary ##

During these hands-on labs, you have seen several languages and technologies to create & run MapReduce jobs on an HDInsight cluster.  




<a name="Appendices" />
## Appendix ##

<a name="GettingStarted" />
### Appendix 1: Getting Started ###

In this exercise, you will request a new HDInsight cluster through the Windows Azure portal.

1. In order to access HDInsight you must first enable it as a preview feature from the Windows Azure Account screen.

	![preview features](images/preview features.png?raw=true)


1. Once the HDInsight feature has been enabled, go to the [Windows Azure](http://manage.windowsazure.com) portal, login using your credentials and select the **HDInsight** option on the left-hand menu.

	![hdinsight on windows azure portal](images/hdinsight on windows azure portal.png?raw=true)
	

1. Before creating a new HDInsight cluster you must create a new Storage account in the 'East US' location for the cluster.

	![create hdinsight storage account](images/create hdinsight storage account.png?raw=true)

1.  Next create the HDInsight cluster using the Quick Create wizard, entering the DNS name, choosing a small sized cluster with 4 data nodes, entering login credentials and selecting the storage account we just created before clicking **Create HDInsight Cluster**

	![create an hdinsight account](images/create an hdinsight account.png?raw=true)

	_Requesting a new cluster_


1. The process will take a few minutes.  While your cluster is requested, you will see feedback messages like the following.

	![provisioning cluster 1](images/provisioning cluster 1.png?raw=true)

	_Cluster creation and allocation in progress_

1. After the cluster has been successfully allocated you will see it listed under your HDInsight menu.

	![hdinsight complete](images/hdinsight complete.png?raw=true)

1. Click on the newly created cluster to view its details in the Azure portal.

	![manage cluster](images/manage cluster.png?raw=true)

1. Click the link to open the HDInsight portal for the newly created cluster and login using your credentials.

	![HDInsight login](images/HDInsight login.png?raw=true)

1. You can now manage your cluster from the HDInsight portal account page.

	![Windows Azure HDInsight portal](images/Windows Azure HDInsight portal.png?raw=true)

