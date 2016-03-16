/**
 * Created by hu on 2016/3/12.
 */
var http=require('http');
var fs=require('fs');

var mime=require('mime');
var path=require('path');
//解析请求的url
var url=require('url');
var server=http.createServer(function(request,response){
    //把url转成obj对象 传true的话query变成了对象 取值更加方便了
    var urlObj=url.parse(request.url,true);
    //console.log(urlObj);
    //另一种写响应头的方法
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    //pathname是我们的路径名 问号和端口号之间的那部分
    if(urlObj.pathname=='/apple'){
        //query 查询字符串 true则转成对象
        response.end(urlObj.query.num+'苹果');
    }

}).listen(8002);