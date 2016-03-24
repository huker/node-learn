/**
 * Created by hu on 2016/3/24.
 */
var express=require('express');
var app=express();

app.get('/',function(req,res){
    console.log('welcome');
});

app.listen(8080);