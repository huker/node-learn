var async=require('async');

async.auto({
    water:function(cb){
        console.time('cost');
        setTimeout(function(){
            cb(null,'水')
        },1000)
    },
    flour: function(cb){
        setTimeout(function(){
            cb(null,'面')
        },1000)
    },
    mix:['water','flour',function(cb,result){
        console.log(arguments);
        setTimeout(function(){
            cb(null,result.water+'+'+result.flour)
        },3000)
    }]
},function(err,result){
    console.timeEnd('cost');
    console.log(result)
});

