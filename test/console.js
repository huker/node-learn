/**
 * Created by hu on 2016/2/19.
 */

console.log('this is a log');
console.info('this is a info');
console.warn('this is a warn');
console.error('this is a error');

//重定向日志文件
//node console.js > log.txt 把log和info的内容重定向进去
//node console.js 1>log.txt 2>error.txt 分开来两个
//node console.js 1>log.txt 2>&1error.txt 将所有日志信息都放进log.txt

//time和timeEnd之间代码执行的时间 参数要相同（字符串）
//可以用来对代码性能测试
console.time('test');
for(var i=0;i<1000000;i++){}
console.timeEnd('test');
