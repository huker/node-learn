/**
 * Created by hu on 2016/3/16.
 */
var http=require('http');
var fs=require('fs');
var url=require('url');
var querystring=require('querystring');
var server=http.createServer(function(req,res){
    //这个parse一定会返回一个对象
    //true的话urlobj的query也会是一个对象 否则是个字符串
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    if(pathname=='/'){
        fs.readFile('./index2.html','utf-8',function(err,data){
            res.end(data);
        })
    }else if(pathname=='/reg'){
        //接受请求体的内容
        var str='';　//这里不赋值下面就变成undefined
        req.on('data',function(data){
            //console.log(data);
            str+=data;
        });
        req.on('end',function(){
            var obj=querystring.parse(str);
            console.log(obj);
            //console.log(str);
            res.end('ok');
        })
    }
});

server.listen(8002);