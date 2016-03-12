/**
 * Created by hu on 2016/3/12.
 */
//优化版本 消除重复的
//var mime={
//    'html':'text/html',
//    'css':'text/css'
//};
var http=require('http');
var fs=require('fs');

var mime=require('mime');
var path=require('path');
var server=http.createServer(function(request,response){
    var url = request.url;
    if(url=='/'){
        url='/index.html';
    }
    response.setHeader('Content-Type',mime[path.extname(url)]+',charset=utf-8');
    fs.readFile('.'+url,'utf8',function(err,data){
        response.write(data);
        response.end();
    })
}).listen(8002);