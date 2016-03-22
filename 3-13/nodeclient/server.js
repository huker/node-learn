/**
 * Created by hu on 2016/3/21.
 */
var http=require('http');
var querystring=require('querystring');
var users=[];
var fs=require('fs');
/*
* 客户端把一个用户信息发送给服务器
* 服务器接收到后追加到users数组
* 服务器返回users数组 在客户端打印
* */
http.createServer(function(req,res){
    console.log(req.method); //方法
    console.log(req.headers); //请求头
    console.log(req.httpVersion); //http版本
    console.log(req.url);  //请求地址
    //设置编码
    req.setEncoding('utf8');
    var contentType=req.headers['content-type'];
    //每次接收到数据 都会触发data事件 执行回调
    var result='';
    req.on('data',function(data){
        //console.log(data);
        result+=data;
    });
    req.on('end',function(){
        var user='';
        if(contentType=='application/json'){
            user=JSON.parse(result);
        }else if(contentType=='application/x-www-form-urlencoded'){
            user=querystring.parse(result);
        }
        users.push(user);
        fs.writeFile('./main.txt',JSON.stringify(users),'utf-8',function(err){
           console.log('ok')
        });
        res.end(JSON.stringify(users));
    });
    //设置响应头 4种  通用头(请求响应都能用) 响应头 实体头 自定义头
    //res.setHeader('name','hu');
    //res.setHeader('age','21');
    //res.end('over');
}).listen(8080);
