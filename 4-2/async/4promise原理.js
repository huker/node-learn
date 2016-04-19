var fs=require('fs');

var Defer=function(){
    var callback;
    var status='pending';
    var value;
    return {
        resolve:function(_value){
            value=_value;
            status='resolve';
            callback(value);
        },
        promise:{
            then:function(_callback){
                callback=_callback;
            }
        }
    }
};

var defer=new Defer();

var promise=defer.promise;

fs.readFile('1.txt','utf-8',function(err,data){
    defer.resolve(data);
});

promise.then(function(data){
    console.log(data)
});