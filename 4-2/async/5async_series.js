var async=require('async');

//串行任务
//1 数组写法
//async.series([
//    //异步操作不知道什么时候结束 所以要传一个回调，告诉他结束了
//    //和中间件的next()一样
//    function(cb){
//        setTimeout(function(){
//            console.log('先看动漫');
//            cb(null,'看动漫');
//        },3000)
//    },
//    function(cb){
//        setTimeout(function(){
//            console.log('再做作业');
//            cb(null,'做作业');
//        },3000)
//    }
//],function(err,result){
//    console.error(err);
//    console.log(result);
//});

//2 对象写法
async.series({
    //异步操作不知道什么时候结束 所以要传一个回调，告诉他结束了
    //和中间件的next()一样
    acg:function(cb){
        setTimeout(function(){
            console.log('先看动漫');
            cb(null,'看动漫');
        },3000)
    },
    works:function(cb){
        setTimeout(function(){
            console.log('再做作业');
            cb(null,'做作业');
        },3000)
    }
},function(err,result){
    console.error(err);
    console.log(result);
});