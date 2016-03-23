var parseBody=require('./parseBody.js');
module.exports=function(options,result,callback){
    var http=require('http');
//向服务器发送请求
    var request=http.request(options,function(res){
        parseBody(res,function(result){
            callback(result);
        });
    });
    //向服务器发送的请求体
    request.end(result);
};