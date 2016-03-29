/*
* 服务器向客户端发送cookie
* 客户端的浏览器保存cookie
* 然后每次请求浏览器都会把cookie发送给服务器
* */

var http=require('http');

//无论种cookie 还是发 都在header里面的 响应头和请求头
var server=http.createServer(function(req,res){
    //第一次访问浏览器 服务器种cookie到浏览器
    if(req.url=='/write'){
        //res.setHeader('Set-Cookie','name=huk');
        var time=new Date(new Date().getTime()+10*1000).toGMTString();
        res.writeHead(200,{'Set-Cookie':'age=6; path=/; Expires='+time});
        res.end('ok');
    }else if(req.url=='/read'){
        //第二次访问 客户端向服务器发送cookie 服务器端通过header进行接收
        console.log(req.headers);
        //cookie: 'name=huk'
        res.end(req.headers.cookie)
    }

});

server.listen(8080);