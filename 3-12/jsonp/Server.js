/**
 * Created by hu on 2016/3/16.
 */
var http=require('http');
var fs=require('fs');
var url=require('url');
var server=http.createServer(function(req,res){
    //这个parse一定会返回一个对象
    //true的话urlobj的query也会是一个对象 否则是个字符串
    var urlObj=url.parse(req.url,true);
    query=urlObj.query;

    var pathname=urlObj.pathname;
    if(pathname=='/books'){
        res.end(query.callback+'(["'+query.name+'","'+query.age+'"])'); //res.end('show("1","2")');
    }
});

server.listen(8004);