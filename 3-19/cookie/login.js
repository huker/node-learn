var express=require('express');
var app=express();
var cookieparser=require('cookie-parser');
var path=require('path');

app.use(cookieparser());

app.set('view engine','ejs');
app.set('views',path.resolve());

function checkLogin(req,res,next){
    if(req.cookies.username&&req.cookieshnjmuy){
        next();
    }else{
        res.redirect('/');
    }
}

app.get('/',function(req,res){
    res.render('login.ejs',{});
});

app.get('/login',function(req,res){
    //express封装了 返回{ username: 'ss' }
    //console.log(req.query);
    var username=req.query.username;
    res.cookie('username',username);
    res.redirect('/user');
});

app.get('/user',checkLogin,function(req,res){
    res.send(req.cookies);
});

app.listen(8080);