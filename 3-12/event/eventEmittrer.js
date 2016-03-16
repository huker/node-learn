/**
 * Created by hu on 2016/3/12.
 */
function EventEmitter(){
    this._events={};
//    初始化一个私有属性
}
/*
* 自己扩展一下这个方法
* */
EventEmitter.prototype.on=function(type,listener){
    if(this._events[type]){
        this._events[type].forEach(function(){

        })
    }

};

//作业2 once
EventEmitter.prototype.once=function(type,listener){

};
EventEmitter.prototype.emit=function(type,listener){

};
