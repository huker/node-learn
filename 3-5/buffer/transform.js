//buffer.toString([encoding[,start[,end]]]);
var buffer=new Buffer('zhufeng');
//字符串转buffer
console.log(buffer);
//buffer转字符串
console.log(buffer.toString('utf-8',3,6));