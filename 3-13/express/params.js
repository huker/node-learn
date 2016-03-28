/**
 * Created by hu on 2016/3/24.
 */
var express=require('express');
var app=express();

app.get('/hello',function(req,res){
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.query);
    res.send('welcome');
});

//路径参数 把向服务器端传递的参数放在路径里
app.get('/user/:id/:age',function(req,res){
    console.log(req.params); //{ id: '1', age: '2' }
   console.log(req.params.id);
    console.log(req.params.age);
});
app.listen(8080);