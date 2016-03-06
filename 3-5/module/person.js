/**
 * Created by hu on 2016/3/5.
 */
function person(a){
    //this.name=name;
    console.log('hello')
}
console.log('person');
//console.log(module);
//var exports=module.exports;
//module.exports=person;
exports.person=person;
//module等于这个ｊｓ模块本身
/*
* 1，如果以属性方式的话 用exports module.exports 效果一样
* 2.如果需要导出的是引用类型 只能用module.exports
*
* */