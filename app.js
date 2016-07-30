var express = require('express');

var app = express(),
    port = process.env.PORT || 8080;
    
app.listen(port, function(){
    console.log('app listening at port: ' + port)
});

app.get('/', function(req, res){
    
// the ip address can be found via request header

   var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress; 

//respond with json

    res.json({
        ipaddress: ip,
        language: req.headers["accept-language"].split(",")[0],
        software: req.headers["user-agent"].match(/\((.*?)\)/)[1]
    })
});