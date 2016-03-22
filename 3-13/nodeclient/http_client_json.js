/**
 * Created by hu on 2016/3/21.
 */
//作为客户端 向服务器端发请求 不通过浏览器了
var http=require('http');
//指定请求参数
var options={
    host:'localhost',
    port:8080,
    path:'/post',
    method:'POST',
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
};
//向服务器发送请求
var request=http.request(options,function(res){
    console.log(res.statusCode); //读取响应码
    console.log(res.headers);　　//读取响应头
    var result='';
    res.on('data',function(data){
        result+=data;
    });
    res.on('end',function(){
        var users=JSON.parse(result);
        console.log(users)
    })
});
//request也是一个流 是个可写流
//write end指定请求体 一定要写一个 才能把请求发出去
//request.write(JSON.stringify({name:'hu'}));
//request.write('{"name":"hu"');
//request.write(',"age":21}');
//查询字符串形式  application/x-www-form-urlencoded
request.write('name=hu&age=21');
request.end();