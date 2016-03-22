/*
* 如果我们要jsonp或者刚刚的跨域 就要服务器端配合 如果8080就是不配合 那只能代理跨域
* 现在要把cross2作为一个代理
* 先是index把请求发到cross2 cross2再作为客户端向cross发起请求 访问8080端口
* 思路 1.获取请求里的请求体
*     2.构建一个指向8080的请求 把请求体传递过去
*     3.得到8080的响应 再传回客户端
*     客户端 和 8080服务器 都不用改，只要把中间的代理写
* */

var http=require('http');
var fs=require('fs');
var parseBody=require('./parseBody.js');
var proxy=require('./request.js');
var options={
    host:'localhost',
    port:8080,
    path:'/reg',
    method:'POST',
};
var users=[];
var server=http.createServer(function(req,res){
    if(req.url=='/'){
        //把html里的内容写到res里面
        fs.createReadStream('./index.html').pipe(res);
    }else if(req.url=='/req'){
        parseBody(req,function(result){

        });
    }
}).listen(9090);