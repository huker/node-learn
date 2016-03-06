/**
 * Created by hu on 2016/3/6.
 */
var fs=require('fs');

var data=fs.readFileSync('./index.txt','utf-8');
//不需要传递回调函数 通过函数返回值接收（放进变量）
//I/O请求文件 等待文件读取完成 给data 阻塞了主线程
console.log(data);
console.log('b');
console.log('c');

//try cache 捕捉错误
