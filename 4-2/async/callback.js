var fs = require('fs');
var events=require('events').EventEmitter;

/**
 * 1.监听一个读完1.txt的事件
 * 2. 当读取文件完成的时候会触发这个事件，
 * 3. 当这个事件发生的时候拿到文件名，然后去读取文件名对应的内容
 * 3.
 */

var file=new events();

file.on('Start',function(data){

    fs.readFile(data,'utf8',function(err,data){
        console.log(data);
    })

});

//所有异步代码都在同步代码之后执行

fs.readFile('1.txt','utf8',function(err,data){
    file.emit('Start',data);
});