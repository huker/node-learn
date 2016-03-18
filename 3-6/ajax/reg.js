/**
 * Created by hu on 2016/3/14.
 */
var http=require('http');
var fs=require('fs');
var url=require('url');
var users=[];//存收到的数据的
var server=http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    res.setHeader('Content-Type','text/html','utf-8');
    if(urlObj.pathname=='/'){
        //console.log(urlObj);
        fs.readFile('./reg.html',function(err,data){
            res.end(data);
        });
    }else if(urlObj.pathname=='/reg'){
        var str='';
        req.on('data', function (data) {
            //接收的时可能一次性接收不完 data事件会触发很多次
            //所以这样累加 接收到的时候是个buffer 所以toString一下
            str+=data.toString();
        });
        req.on('end',function(){
            console.log(str);
            //users.push(JSON.parse(str));
            //str就是单个一次输入的{"username":"XXX","age":"XXX"}
            res.end(str)
        })
    }
});
server.listen(8002);