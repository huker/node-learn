/**
 * Created by hu on 2016/3/29.
 */
var express=require('express');
var app=express();
var cookieParser=require('cookie-parser');

app.use(cookieParser());

//cookieParser把req.header.cookie的字符串转成了对象 放到req.cookie下
app.get('/',function(req,res){
    //默认
    res.cookie('name','hu');
    //设置域名
    res.cookie('name','hu',{
        domain:'a.zfpx.cn'  //.zfpx.cn 的话前面是什么都能匹配
    })

});

app.listen(8080);

