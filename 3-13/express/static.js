var express=require('express');
var app=express();
var path=require('path');

//静态文件服务中间件
// 就把默认的静态文件的访问地址变到public目录下
app.use(express.static(path.resolve('public')));

//原理
//app.use(function(req,res,next){
//    fs.createReadStream(path.resolve('public')+req.url).pipe(res);
//});

app.listen(8080);