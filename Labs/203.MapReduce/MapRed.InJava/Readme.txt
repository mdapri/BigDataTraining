from
http://azure.microsoft.com/en-us/documentation/articles/hdinsight-develop-deploy-java-mapreduce/
-------

Create a directory C:\Users\maurizio.dapri\Documents\TODO\Bigdata\WordCountJava
cd there
mvn archetype:generate -DgroupId=org.apache.hadoop.examples -DartifactId=wordcountjava -DarchetyoeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
afer setting up all the pom.xml with dependencies and other stuff
-- Build
mvn clean package