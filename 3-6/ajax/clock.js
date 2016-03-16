/**
 * Created by hu on 2016/3/14.
 */
var http=require('http');
var fs=require('fs');
var url=require('url');

var server=http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    res.setHeader('Content-Type','text/html','utf-8');
    if(urlObj.pathname=='/'){
        //console.log(urlObj);
        fs.readFile('./clock.html',function(err,data){
            res.end(data);
        });
    }else if(urlObj.pathname=='/clock'){
        //res.end(new Date().toLocaleString());
        res.statusCode=404;  //返回404状态码 not Found
        res.end();
    }
});
server.listen(8002);