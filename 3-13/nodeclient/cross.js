/**
 * Created by hu on 2016/3/22.
 */
var http=require('http');
var fs=require('fs');
var users=[];
var server=http.createServer(function(req,res){
    var result='';
    req.on('data',function(data){
        result+=data;
    });
    req.on('end',function(){
       users.push(JSON.parse(result));
        //设置响应头 允许哪个来源访问我们的服务器 key是Access-Control-Allow-Origin value是来源
        // 来源写* 就是匹配所有 http://localhost:*
        res.setHeader('Access-Control-Allow-Origin','http://localhost:63342');
        res.end(JSON.stringify(users));
    })
}).listen(8080);