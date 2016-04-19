/**
 * 1.监听一个读完1.txt的事件
 * 2. 当读取文件完成的时候会触发这个事件，
 * 3. 当这个事件发生的时候拿到文件名，然后去读取文件名对应的内容
 * 3.
 */

var EventEmitter=require('events');
var fs=require('fs');
var util=require('util');

function file(){
    //EventEmitter.EventEmitter.call(this);
}

util.inherits(file,EventEmitter.EventEmitter);

var stream=new file();

stream.on('data', function (data) {
   fs.readFile(data,'utf-8',function(err,data){
       console.log(data);
   })
});

file.prototype.write=function(data){
    this.emit('data',data);
};

stream.write(fs.readFileSync('1.txt','utf-8'));



//var file=new EventEmitter();
//
//file.on('data',function(data){
//    fs.readFile(data,'utf-8',function(err,data){
//        console.log(data);
//    })
//});
//
//
////异步永远在同步后面执行
//fs.readFile('1.txt','utf-8',function(err,data){
//   file.emit('data',data)
//});

