/**
 * Created by hu on 2016/3/12.
 */
var util=require('util');

function Parent(){
    this.name='father';
    this.age=50;
    this.say=function(){
        console.log(this.name);
    }
}
Parent.prototype.showName=function(){
    console.log('show name')
};
function Child(){
    Parent.call(this);
    this.name='child';
}
util.inherits(Child,Parent);
//这只能继承父类上的原型属性 不能继承私有属性 要继承私有就call一下
/*
* 相当于在做child.prototype=new Parent();
* 但是这不能确定的传参 而且会继承私有属性
*
* 原理是function temp(){}弄个空的
* temp.prototype=Parent.prototype
* child.prototype=new temp();
* */
var c=new Child;
console.log(c);
c.showName();

/*
* 将任意一个对象转字符串
* */
c.hobby={
    name:'play',
    price:{
        name:'price'
    }
};
console.log(util.inspect(c,{depth:0}));
//depth 遍历几层
console.log(util.inspect(c));
//全部属性都遍历
