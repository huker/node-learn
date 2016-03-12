var buffer1=new Buffer('你');
var buffer2=new Buffer('好');
var buffer3=new Buffer('世');
var buffer4=new Buffer('界');
//大部分数组的方法都能使用
var all=Buffer.concat([buffer1,buffer2,buffer3,buffer4],12);
var s=all.slice(9,12).toString();
console.log(s);
//console.log(all);
var buffers=new Buffer(12);
buffer1.copy(buffers,0,0,3);
buffer2.copy(buffers,3,0,3);
buffer3.copy(buffers,6,0,3);
buffer4.copy(buffers,9,0,3);
console.log(buffers.toString('utf-8'))

//判断多少字节
console.log(Buffer.byteLength('abc'));