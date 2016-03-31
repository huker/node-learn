/**
 * Created by hu on 2016/3/31.
 */
var mongoose=require('mongoose');
var db=mongoose.connect('mongodb://127.0.0.1:27017/huk');
db.connection.on('error',function(err){
    console.log('fail:'+err);
});
db.connection.on('open',function(){
    console.log('okokok');
});