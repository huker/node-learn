/**
 * Created by hu on 2016/3/6.
 */
var http=require('http');
var server=http.createServer(function(request,response){
    var data=new Date();
    response.setHeader('Content-Type','text/html;charset=utf-8');
    response.write(data.toString());
    response.end();
});
server.listen(8080,'localhost');
//会乱码
//所以要在响应头里加编码
//var http = require('http');
//
//var server = http.createServer(function(request,response){
//    response.write('<head><meta charset="utf-8"/></head>');
//    response.write(new Date().toString());
//    response.end();
//});
//
//server.listen(8080,'localhost');