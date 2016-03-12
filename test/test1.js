/**
 * Created by hu on 2016/3/11.
 */
//(function f(f){
//    console.log(typeof f());
//})(function(){
//    return 1;
//});

//var foo = {
//    bar: function(){ return this.baz; },
//    baz: 1
//}
//console.log(typeof (f = foo.bar)());

//(function(foo){
//    return typeof foo.bar;
//})
//({ foo:
//    {bar: 1}
//});
//#2, #3, #6, #7, #8, #9, #11, #12, #14
//var f=function g(){ return 23; }
//console.log(typeof g());
//(function(x){
//    delete x;
//    console.log(x);
//})(1);