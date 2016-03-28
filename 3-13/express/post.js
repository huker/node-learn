//接收客户端的post请求
var express=require('express');
var app=express();
var path=require('path');
var bodyparser=require('body-parser');
//静态模板中间件
app.use(express.static(__dirname));

//解析请求体的内容 引入body-parser模块
//解析的内容是按照content-type的类型决定的 可能是urlencoded 也可能是json
//extended是true则是用querystring把内容转成对象 false则用body-parser自带的方法
//找到类型 然后转换的内容放到req.body上 找不到就什么都不做
app.use(bodyparser.urlencoded({extended:true}));

//app.use(bodyparser.json());

//post请求的内容不是在url上 是在请求体里面的req.body
app.post('/reg',function(req,res){
    console.log(req.body);
    res.send(JSON.stringify(req.body));
    //res.end('reg');
});

app.listen(8080);