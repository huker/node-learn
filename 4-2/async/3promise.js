/*
* promise 承诺
* */

var fs=require('fs');

//写下一个承诺 把异步操作没有返回值 只有回调函数 所以要这样做
var promise=fs.readFile('1.txt');

//then就是然后 有了这个承诺 然后做什么
//中间发生了什么事都没关系 反正承诺了
promise.then(function(data){
    console.log(data);
});