/**
 * Created by hu on 2016/3/18.
 */
//    流
var fs=require('fs');
var rs=fs.createReadStream('./index.txt',{
    start:3,
    end:8,
    //每次最多读多少大小 字节
    highWaterMark:3
});
//设置编码
rs.setEncoding('utf-8');
//监听data事件 当读到数据的时候发射data事件
//pause 停止喂
//resume 恢复继续喂
rs.on('data',function(data){
    //吃一口先暂停
    rs.pause();
    setTimeout(function () {
        console.log(data);
        //要求继续喂
        rs.resume();
    },1000)
});
rs.on('end',function(){
   console.log('end');
});

//取错误信息
rs.on('error', function (data) {
    console.log(data);
});