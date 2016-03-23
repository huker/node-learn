var http=require('http');
var bodyParser=require('./bodyparser.js');
var server=http.createServer(function(req,res){
    bodyParser(req,function(result){
        res.end(result);
    })
}).listen(8080);