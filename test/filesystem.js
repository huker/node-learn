/**
 * Created by hu on 2016/2/21.
 */

//文件相关操作

//fs模块
var fs=require('fs');

//读取文件
//1 异步读取 读取文件的时候会通过个回调函数在读取文件完成后把文件的内容传给我们
//fs.readFile('sum.js',function(err,data){
//    if(err){
//        console.log(err);
//    }
//    else{
//        console.log(data);
//    }
//});
//<Buffer 2f 2a 2a 0d 0a 20 2a 20 43 72 65 61
//sum.js里每个字符的十六进制的ascII码 存在buffer里
//这样console出来的是buffer对象 里面都是ascII码

//直接输出文本的两种方法

//1 第二个参数可选，选择文本形式
//fs.readFile('sum.js','utf-8',function(err,data){
//    if(err){
//        console.log(err);
//    }
//    else{
//        console.log(data);
//    }
//});
//
////2 调用data的toString方法 也就是调用了buffer的toString方法
fs.readFile('sum.js',function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
});


//同步读取文件 sync--〉同步
var data=fs.readFileSync('log.txt','utf-8');
console.log(data);

//代码异步在前 同步在后，一起执行的时候 首先打印出来的是log的内容 其次是sum的内容
//异步读取文件的时候 node会把读取文件的过程在后台处理 所以不会打断或者阻塞整个js文件的执行，下面的代码可以继续执行
//start async
//start sync
//end sync
//end async

//同步在前的时候 同步代码会阻碍下面的代码执行 先执行完同步的 再开始异步的
//start sync
//end sync
//start async
//end async
