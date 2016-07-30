var express = require('express');

var app = express(),
    port = process.env.PORT || 8080;
    
app.listen(port, function(){
    console.log('app listening at port: ' + port)
});

app.get('/', function(req, res){
    
// the details can be found via request headers refer to README.md

   var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress; 
     
    var lang = req.headers["accept-language"].split(",")[0];
    
    var osv = req.headers["user-agent"].match(/\((.*?)\)/)[1];

//respond with json

    res.json({
        ipaddress: ip,
        language: lang,
        software: osv
    })
});