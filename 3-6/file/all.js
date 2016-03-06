/**
 * Created by hu on 2016/3/6.
 */
var fs=require('fs');
//同步
//var name=fs.readFileSync('./name.txt','utf-8');
//var age=fs.readFileSync('./age.txt','utf-8');



//异步
//1.回调函数嵌套实现多个异步操作完成后执行回调
//缺点：但是花的时间多m+n 而且不易阅读
//fs.readFile('./name.txt','utf-8',function(err,name){
//    fs.readFile('./age.txt','utf-8',function(err,age){
//        console.log(name,age)
//    });
//});

//2计数器
var person={};
function show(){
    if(Object.keys(person).length==2){
        console.log(person);
    }
}
fs.readFile('./name.txt','utf-8',function(err,name){
   person.name=name;
    show();
});
fs.readFile('./age.txt','utf-8',function(err,age){
    person.age=age;
    show();
});
//两个readFile在同时做 不一定哪个先做完

//promise


