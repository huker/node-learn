/**
 * Created by hu on 2016/3/6.
 */
var http=require('http');
var server=http.createServer(function(request,response){
    console.log(request.method); //请求的方法
    console.log(request.url);  //请求的url
    console.log(request.headers); //请求的头

    response.statusCode=404;//设置响应码
    //Error: Can't set headers after they are sent.
    //响应头发出后不能再发送响应头 所以：先设置头 在设置体
    response.setHeader('Content-Type','text/html;charset=utf-8');
    response.write('hello'); //写的响应头和响应体 在调用第一次write时发送 客户端就在接收了
    response.end('over');
});
server.listen(8080,'localhost');