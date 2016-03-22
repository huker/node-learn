/**
 * Created by hu on 2016/3/22.
 */
module.exports=function(req,callback){
  var result='';
    req.on('data',function(data){
        result+=data;
    });
    req.on('end',function(){
        callback(result);
    })
};