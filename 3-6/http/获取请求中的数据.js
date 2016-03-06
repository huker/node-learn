/**
 * Created by hu on 2016/3/6.
 */
var http=require('http');
var server=http.createServer(function(request,response){
    console.log(request.method); //请求的方法
    console.log(request.url);  //请求的url
    console.log(request.headers); //请求的头
    //Error: Can't set headers after they are sent.
    //响应头发出后不能再发送响应头
    response.statusCode=404;//调响应码
    response.setHeader('Content-Type','text/html;charset=utf-8');
    response.write('hello'); //写的响应体 在调用第一次write时发送
    response.end();
});
server.listen(8080,'localhost');