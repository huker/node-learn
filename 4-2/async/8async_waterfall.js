var async=require('async');

async.waterfall([
    function(cb){
        cb(null,'hi')
    },
    function(data,cb){
        console.log(arguments)
        cb(null,data+' simon');
    }
],function(err,result){
    console.log(result)
});