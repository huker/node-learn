/**
 * Created by hu on 2016/2/19.
 */

//程序执行相关的封装对象
//process.stdout -->standard output 标准的信息输出
//process.stderr -->standard error 标准的错误输出

//console.之类就是调用上面的来输出的

process.stdout.write('this is stdout');

process.stderr.write('this is stderr');

//通过write方法输出日志
//建议用console （简单

//用户键盘输入
//先设置编码 读取纯文本就用utf-8 和浏览器上不一样
process.stdin.setEncoding('utf-8');

process.stdin.on('data',function(data){
    console.log(data)
});
//通过on方法 用data事件 回调函数打印出键盘输入的内容


