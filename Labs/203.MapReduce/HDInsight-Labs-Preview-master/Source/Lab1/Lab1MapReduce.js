var map = function (key, value, context) {
    context.write("USA", "New");
    context.write("USA", "Regular");
    var rows = value.split(/\r?\n/);
    for (var i = 0; i < rows.length; i++) {
        var data = rows[i].split(/\t/);
        if (data.length === 6) {
            var visitorType = data[2].trim(), country = data[3].trim(), action = data[5].trim(); 
            if (action === "Purchase") {
                context.write(country, visitorType);
            }
        }
    };
};

var reduce = function (key, values, context) {
    var numOfPurchases = 0; 
    var numOfPurchasesFromNewVisitors = 0; 
    var percentageNewVisitorsPurchasing = 0;

    while (values.hasNext()) {
        var value = values.next(); 
        numOfPurchases ++;
        if (value === "New") {
            numOfPurchasesFromNewVisitors ++;
        }        
    }
    context.write("t", "u");
    context.write(key, numOfPurchases + "");
    percentageNewVisitorsPurchasing = (100 * numOfPurchasesFromNewVisitors/numOfPurchases);
    
    
    context.write(key, numOfPurchases + ", (" + percentageNewVisitorsPurchasing + "%)");
};

