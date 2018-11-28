var express = require('express');
var app= express();
app.get('/sample',function(req,res){
	res.send("Hello World");
});
app.get('/renderHtml',function(req,res){
	res.sendFile(__dirname+'/index.html');
	
});
app.listen(3000,function(req,res){
	console.log("Server is running at 3000");
});