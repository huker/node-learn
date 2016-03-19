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
rs.on('data',function(data){
    console.log('读取',data);
});
rs.on('end',function(){
   console.log('end');
});

//取错误信息
rs.on('error', function (data) {
    console.log(data);
});