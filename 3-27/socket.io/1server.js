/**
 * Created by hu on 2016/3/27.
 */
var express=require('express');
var app=new express();
var path=require('path');
app.use(express.static(__dirname));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'socket.html'));
});

var server=require('http').createServer(app);

var io=require('socket.io')(server);
var clients=[];
io.on('connection',function(socket){
    var usrname;
    socket.send('输入用户名');

    socket.on('message',function(msg){
        clients.forEach(function(client){
            client.send(msg)
        })
    })
});

server.listen(8002);