/**
 * Created by hu on 2016/3/12.
 */
var http=require('http');
var fs=require('fs');

var mime=require('mime');
var path=require('path');
var url=require('url');
var server=http.createServer(function(request,response){
    var urlObj=url.parse(request.url);
    //console.log(urlObj);
    //另一种写响应头的方法
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(urlObj.pathname=='/apple'){
        response.end(urlObj.query.num+'苹果');
    }

}).listen(8002);