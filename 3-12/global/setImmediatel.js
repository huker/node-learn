/**
 * Created by hu on 2016/3/12.
 */

//setTimeout(function(){
//    console.log('w');
//},0);


//思路一样 但是此处的速度比较快 不需要比对时间 直接执行

/*
 * 在下一个事件环中执行此函数 直接执行
 * 放到下一张单子执行
 * */
setImmediate(function(){
    console.log('a');
});

/*
* 把函数放在当前任务的末尾
* 这张单子的末尾
* */
process.nextTick(function(){
    console.log('c');
});
console.log('b');
