/**
 * Created by hu on 2016/2/22.
 */

//创建node sever这么一个外部服务器
var http=require('http');
var fs=require('fs');

//创建一个sever对象
//http的createServer方法参数是个回调函数
//request是浏览器发出的请求 response是对浏览器的请求的响应
var server=http.createServer(function(request,response){
    fs.readFile('index.html','utf-8',function(err,data){
        response.end(data);
    });
    //response.end('<html><head><meta charset="UTF-8"></head><body><h2>你好a年爱啊年爱</h2></body></html>');
});

//监听的端口
server.listen(8080);