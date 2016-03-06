/**
 * Created by hu on 2016/3/6.
 */
var fs=require('fs');
//回调里面err data 是由fs.readFile决定的
function afterRead(err,data){
    //console.log(data)
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
}
fs.readFile('./index.txt','utf-8',afterRead);
console.log('b');
console.log('c');
//异步需要回调函数
//完成同部方法执行完后回调 异步的读取 所有同步执行完了 再执行异步
//异步不阻塞主线程
// b c index