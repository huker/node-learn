var websocket=require('ws');

var ws=new websocket('ws://localhost:8080');

ws.on('open',function(){
   ws.send('你好服务器');
});

ws.on('message',function(data,flags){
    console.log(data)
});