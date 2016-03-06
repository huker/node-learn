/**
 * Created by hu on 2016/3/5.
 */
var module={exports:{}};
function math(){
    var exports=module.exports; //=;module.exports
    //----
    exports.num=num;
    //----
    return exports
}
var m=math();
var m2=math();
console.log(m===m2);