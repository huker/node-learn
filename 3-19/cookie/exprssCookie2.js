/**
 * Created by hu on 2016/3/29.
 */
var express=require('express');
var app=express();
var cookieParser=require('cookie-parser');

app.use(cookieParser());

//cookieParser把req.header.cookie的字符串转成了对象 放到req.cookie下
app.get('/',function(req,res){
    // 如果请求中的 cookie 存在 visited, 则输出 cookie
    // 否则，设置 cookie 字段 visited, 并设置过期时间为10分钟
    if(req.cookie.visited){
        res.send(req.cookie);
    }else{
        //(key, value ,最大过期时间倒计时)
        res.cookie('visited', 1, {maxAge: 10 *1000});
        res.setHeader('Set-Cookie','visit=1');
        res.send('new cookie')
    }
});

app.listen(8080);




//
//var express      = require('express');
//var cookieParser = require('cookie-parser');
//
//var app = express();
//app.use(cookieParser());
//// req.headers.cookie= name=zfpx; age=6
//app.get('/', function (req, res) {
//    if (req.cookies.visited) {
//        res.send("欢迎老朋友");
//    } else {
//        res.cookie('visited', 1, {maxAge: 10 * 1000});
//        res.send("欢迎新朋友");
//    }
//});
//app.listen(80);