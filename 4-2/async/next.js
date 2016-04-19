var i=0;
var functions=[
    function(cb){
        cb(null,1);
    },
    function(cb){
        cb(null,2);
    }
];
function next(err,data){
    if(err){
        throw Error(err);
    }else{
        console.log(data);
    }
    if(i>=functions.length){
        return;
    }
    var fn = functions[i++];
    fn(next);

}

next();