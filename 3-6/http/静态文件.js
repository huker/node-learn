/**
 * Created by hu on 2016/3/6.
 */
var http=require('http');
var fs=require('fs');

var server=http.createServer(function(request,response){
    //fs.readFile('./index.html','utf8', function (err,data) {
    //    response.write(data);
    //    response.end();
    //});
    var url = request.url;
    if(url == '/index.html'){
        //指定文件的路径 设置编码 得到data就是字符串类型的
        response.setHeader('Content-Type','text/html;charset=utf-8');//设置响应头
        fs.readFile('./index.html','utf8',function(err,data){
            response.write(data);
            response.end();
        })
    }else if(url == '/style.css'){
        response.setHeader('Content-Type','text/css;charset=utf-8');//设置响应头
        fs.readFile('./style.css','utf8',function(err,data){
            response.write(data);
            response.end();
        })
    }
}).listen(8002);