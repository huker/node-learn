/**
 * Created by hu on 2016/3/23.
 */
//加载express
var express=require('express');
//获取配置对象
var app=express();
//配置路由
//当用户访问/的时候 会执行回调
app.get('/',function(req,res){
    //send是express自己的方法 它可以自动判断参数类型 自动转换响应信息
    //并且自动设置content-type
    res.send('over');
});

//先匹配到哪个就执行 并且执行完就结束了 下面的不执行了 send方法里面包含end方法
//只能匹配get
app.get('/hello',function(req,res){
    res.send('get hello');
});
//只能匹配post
app.post('/hello',function(req,res){
    res.send('post hello');
});
//两个都行 all匹配所有http东西
app.all('/hello',function(req,res){
    res.send('all hello');
});


//启动服务器
app.listen(3000);



