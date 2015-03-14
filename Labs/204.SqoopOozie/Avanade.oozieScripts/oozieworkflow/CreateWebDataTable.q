DROP TABLE IF EXISTS ${TABLE_NAME};
CREATE EXTERNAL TABLE ${TABLE_NAME}
(LogDate STRING,
PageHits INT,
BytesRecvd INT,
BytesSent INT)
ROW FORMAT DELIMITED FIELDS TERMINATED BY ' '
STORED AS TEXTFILE LOCATION '${LOCATION}';