/**
 * Created by hu on 2016/3/6.
 */
//异步不能捕捉?
try{
    setTimeout(function(){
        throw  Error('error')
    },1000)
}catch(e){
    console.log(e)
}