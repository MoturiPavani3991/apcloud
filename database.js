var MongoClient = require('mongodb').MongoClient;
var url='mongodb://user:password1234@ds145292.mlab.com:45292/digitalsummit';
MongoClient.connect(url,function(err,result){
	
	if(err)
	{
		console.log("Error while Connecting to Database");
	}
	else 
	{
		console.log("Database connected");
		var db=result.db('digitalsummit');
		db.collection('vrsec').insert({"message":"Hello World"},function(err,data){
			if(err)
			{
				console.log("Error while inserting the data");
			}
			else
			{
				console.log('Successfully inserted the data');
			}
		});
	}
	
})