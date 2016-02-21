/**
 * Created by hu on 2016/2/19.
 */

//程序执行（process对象）相关的封装对象

//process.stdout -->standard output 标准的信息输出
//process.stderr -->standard error 标准的错误输出
//console.之类就是调用上面的来输出的

process.stdout.write('this is stdout');

process.stderr.write('this is stderr');

//通过write方法输出日志
//建议用console （简单

//stdin
//用户键盘输入
//先设置编码 读取纯文本就用utf-8 和浏览器上不一样
process.stdin.setEncoding('utf-8');

//通过on方法的data事件 回调函数打印出键盘输入的内容
//process.stdin.on('data',function(data){
//    console.log(data)
//});

//stdin的on方法的readable事件，不传参，不会自动接收，就要加一个read来读取输入的
process.stdin.on('readable',function(){
   var data=process.stdin.read();
    console.log(data);
});


//cwd输出的是我执行node命令的路径 dirname是js文件的绝对路径
//current working dir 当前工作目录
//console.log(process.cwd());


//on
//exit 程序正常退出的时候 执行exit事件
process.on('exit',function(){
   console.log('process will exit')
});

//SIGINT事件 signal interrupted 当有中断信号时触发这个事件
//比如上面stdin输入内容 cmd里按ctrl+c退出就会触发signint
//这里on方法监听的sigint事件 改变了原来的行为 所以ctrl c不会退出
process.on('SIGINT',function(){
    console.log('process has a sigint.');
    process.exit();//手动加上 使程序退出
});

