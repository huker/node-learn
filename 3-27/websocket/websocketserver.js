var server=require('ws').Server;

var wss=new server({
    port:8080
});

wss.on('connection',function(ws){
   ws.on('message',function(mes){
       console.log('服务器收到的消息',mes);
       ws.send('服务器的回复')
   })
});