var http = require('http');

var fs = require('fs');




var server = http.createServer(function(req,res){
 console.log('Request was made:'+req.url);
 res.writeHead(200,{'content-Type':'application/json'});

 var obj ={
     name:'Ryu',
     job:'Nina',
     age:29
 };

 res.end(JSON.stringify(obj));

});


server.listen(3000);
console.log('Server listening to port 3000');
