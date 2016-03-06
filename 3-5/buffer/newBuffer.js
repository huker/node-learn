//buffer 类似于数组
// buffer里面只能放字节 0-255
var buffer=new Buffer(1); //buffer的大小要事先确定 并不能改变 此处1个字节
buffer[0]=10;
//输出的是16进制的
console.log(buffer);

//通过字符串创建
console.log(new Buffer('拉'));
//1中文3字节

//数组创建 里面只能放数字 不能字符串
console.log(new Buffer([1,2,3]));
