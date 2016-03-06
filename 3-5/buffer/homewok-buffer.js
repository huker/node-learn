/**
 * Created by hu on 2016/3/6.
 */
//var buf=new Buffer('你好哇');
//console.log(buf.toString('utf-8',0,9));
var buf1=new Buffer('你');
var buf2=new Buffer('好');
var buf3=new Buffer('哇');
var buffer=Buffer.concat([buf1,buf2,buf3]);
console.log(buffer)
console.log(buffer.toString('utf-8'));
//反转
var a=buffer.reverse();
console.log(a);