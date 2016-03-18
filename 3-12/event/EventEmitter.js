/**
 * Created by hu on 2016/3/12.
 */
function EventEmitter(){
    this._events={};
//    初始化一个私有属性
}
/*
* 自己扩展一下方法
* */
//type 绑定的事件名
//listen 事件发生后的监听
EventEmitter.prototype.on=EventEmitter.prototype.addListener=function(type,listener){
    if(this._events[type]){
            this._events[type].push(listener);
    }else{
        this._events[type]=[listener];
    }

};

//作业2 once
EventEmitter.prototype.once=function(type,listener){
    var _this=this;
    var exist=false;
    _this.addListener(type,function(){
        //清除现在的listenr
        _this.removeListener(type,listener);
        //console.log(type)
        if(!exist){
            exist=true;
            listener.apply(null);
        }
    })
};
EventEmitter.prototype.emit=function(type){
    if(this._events[type]){
        this._events[type].forEach(function(listener){
            //把函数调用一下
            listener.apply(null);
        })
    }

};
EventEmitter.prototype.removeListener=function(type,listener){
    if(this._events[type]){
        var listeners=this._events[type];
        for(var i=0;i<listeners.length;i++){
            if(listeners[i]===listener){
                listeners.splice(i,1);
                return
            }
        }
    }
};
module.exports=EventEmitter;
