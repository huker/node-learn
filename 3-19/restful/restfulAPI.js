var express=require('express');
var app=express();
var path=require('path');
var bodyparser=require('body-parser');
//存放所有用户
var users=[{id:1,name:'hu'},{id:2,name:'liu'}];
//指定渲染引擎
app.set('view engine','ejs');
//设置渲染模板的目录
app.set('views',path.resolve());

app.use(bodyparser.urlencoded({extended:true}));

//1.获取所有用户(一般是集合 所以给负数)
app.get('/users',function(req,res){
    //Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
    //取出了accept 但是要取权重最高的content-type
    var accept=req.headers['accept'];
    //map是映射 return的值()映射到 原来的数组里面
    var acceptType=accept.split(',').map(function(item){
        var value=item.split(';');
        return {
            type:value[0],
            q:value[1]?value[1].split('=')[1]:1
        };
    //    用优先级进行排序 取排名最高的
    }).sort(function(a,b){
        return b.q- a.q;
    })[0].type;

    console.log(acceptType);

    //判断不同的渲染方式
    if(acceptType=='text/plain'){
        res.send(users);
    }else if(acceptType=='text/html'){
        //render send 都封装好了 自动生成对应的content-type 但是最好自己设置
        //设置响应类型content-type
        res.setHeader('Content-Type',acceptType);
        //渲染模板
        res.render('users.ejs',{
            users:users
        })
    }else{
        res.send(users);
    }

});

//返回某个用户的信息 --> $ curl http://localhost:8080/users/1
//../users/:id路径参数
app.get('/users/:id',function(req,res){
    var id=req.params.id;
    //过滤出和id一样id的用户
    var filteredUsers=users.filter(function(user){
        return user.id==id
    });
    res.send(filteredUsers.length>0?filteredUsers[0]:'not found 404');
});

//新增加用户 post请求
//-X指定请求方法 --data指定请求体数据
//curl -X POST --data "name=haha" http://localhost:8080/users
app.post('/users',function(req,res){
    var adduser=req.body;
    if(adduser){
        //为增加的用户赋一个最大的ID
        adduser.id=users[users.length-1].id+1;
        users.push(adduser);
        //返回新生成的完整对象
        res.send(adduser);
    }else{
        res.send({msg:'增加用户失败'});
    }

});

//整体更新全部属性
//curl -X PUT --data "id=2&name=haha20" http://localhost:8080/users/2
app.put('/users/:id',function(req,res){
    var putuser=req.body;
    if(putuser){
        for(var i=0;i<users.length;i++){
            //
            if(users[i].id==putuser.id){
                users[i]=putuser; //把老的对象整体替换成新的对象
                break;
            }
        }
        res.send(putuser);
    }else{
        res.send({msg:'没有修改内容'})
    }
});

//局部更新 请求体里只传要更新的字段
//curl -X PATCH --data "name=haha200" http://localhost:8080/users/2
app.patch('/users/:id',function(req,res){
    var updatedFields=req.body;
    if(updatedFields){
        for(var i=0;i<users.length;i++){
            //请求体的内容没有id 只能用路径参数里面的
            if(users[i].id==req.params.id){
                for(var attr in updatedFields){
                    if(updatedFields.hasOwnProperty(attr)){
                        users[i][attr]=updatedFields[attr];
                    }
                }
                res.send(users[i]);
                break
            }
        }

    }else{
        res.send({msg:'没有修改内容'})
    }
});

app.listen(8080);