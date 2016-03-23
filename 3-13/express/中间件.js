var express=require('express');
var app=express();

//使用中间件
//第一个参数是地址 请求什么地址 执行写的地址的use 不写的话都行
app.use(function(req,res,next){
    res.money=100;
    next();
});
app.use('/money',function(req,res,next){
    res.money=res.money-10;
    next();
});
app.use('/hello',function(req,res,next){
    res.money=res.money-30;
    next();
});
app.use(function(req,res,next){
    res.money=res.money-60;
    next();
});
//send里面不能单单数字 报错 会当成状态码 所以加‘’隐式转换
app.get('/money',function(req,res){
    res.send(''+res.money);
});

app.listen(3000);