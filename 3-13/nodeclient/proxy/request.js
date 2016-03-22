var parseBody=require('./parseBody.js');
module.exports=function(options,result,callback){
    var http=require('http');
//向服务器发送请求
    var request=http.request(options,function(res){
        parseBody(res);
        var result='';
        res.on('data',function(data){
            result+=data;
        });
        res.on('end',function(){
            var users=JSON.parse(result);
            console.log(users)
        })
    });
    //向服务器发送的请求体
    request.end(result);
};