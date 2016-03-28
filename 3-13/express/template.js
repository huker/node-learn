var express=require('express');
var app=express();
var path=require('path');
//配置属性值
//指定渲染模板引擎
app.set('view engine','ejs');
//设置放模板文件的目录
//app.set('views',process.cwd()+'/view');
app.set('views',path.resolve('view'));

app.get('/', function (req, res) {
    res.render('index',{title:'首页',books:{name:'node.js'}});
});

app.get('/reg',function(req,res){
   res.render('index',{title:'注册',books:{name:'next'}});
});

app.listen(8080);