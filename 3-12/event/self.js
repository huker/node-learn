/**
 * Created by hu on 2016/3/12.
 */
var EventEmitter=require('./EventEmitter');
//var e =new EventEmitter();
var util=require('util');
//现在要让girl继承eventEmitter
function Girl(name){
    this.name=name;
    EventEmitter.call(this);
}
util.inherits(Girl,EventEmitter);
var girl=new Girl();
function Boy(name){
    this.name=name;
    this.say=function(word){
        console.log(this.name,word)
    }
}
var xiaoming=new Boy('小明');
var xiaohua=new Boy('小花');
//on也一样和addListener
//都是注册监听事件
girl.addListener('look',xiaoming.say.bind(xiaoming,'123'));
girl.on('look',xiaohua.say.bind(xiaohua,'456'));
girl.emit('look');
//移除监听
//girl.removeListener('look',xiaoming.say.bind(xiaoming,'123'));
////移除所有监听
////girl.removeAllListeners('look');
//
////发射时间 发布
//girl.emit('look');
//
////如果发射多次事件 只会触发一次
girl.once('do', function () {
    console.log('eat');
});
girl.emit('do');//发生个触发 用emit代码触发
girl.emit('do');//发生个触发 用emit代码触发
girl.emit('do');//发生个触发 用emit代码触发
