/**
 * Created by hu on 2016/3/12.
 */
var EventEmitter=require('events');
//var e =new EventEmitter();
var util=require('util');
//现在要让girl继承eventEmitter
function Girl(){
    this.name=name;
    EventEmitter.call(this);
}
util.inherits(Girl,EventEmitter);
var girl=new Girl();
//on也一样和addListener
//都是注册监听事件
girl.addListener('look',function(){
    console.log('look');
});
//移除监听
girl.removeListener('look');
//移除所有监听
//girl.removeAllListeners('look');

//发射时间 发布
girl.emit('look');//发生个触发 用emit代码触发

//如果发射多次事件 只会触发一次
girl.once('饿了', function () {
    console.log('eat');
});
