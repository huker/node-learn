var express=require('express');
var app=express();

//使用中间件
//第一个参数是地址 请求什么地址 执行写的地址的use 不写的话都行

//计算一个处理请求一共花多少时间 写一个use把算请求的中间件写在里面
app.use(function(req,res,next){
    res.start=Date.now();
    //暂存end方法
    var over=res.end;
    //为res.end重新赋值为我们自定义的函数
    res.end=function(){
        //把原来的end方法调用一次
        over.apply(res,Array.prototype.slice.call(arguments));
        //加入自己的逻辑 end调用的时候就会输出运行时间了
        console.log(Date.now()-res.start);
    };
    next();
});
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