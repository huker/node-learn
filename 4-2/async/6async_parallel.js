var async=require('async');
//并行执行
async.parallel([
    function (cb) {
        setTimeout(function(){
            cb(null,'看动漫')
        },1000)
    },
    function (cb) {
        setTimeout(function(){
            cb(null,'做作业')
        },2000)
    }
],function(err,result){
    console.log(result);
});