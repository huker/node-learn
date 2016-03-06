/**
 * 操作目录
 */
var fs=require('fs');
//创建目录 make director
//创建的时候父目录要必须存在
//fs.mkdir('test',function(err){
//    if(err){
//        console.log(err);
//        console.log('fail');
//    }else{
//        console.log('success');
//    }
//});

//读取目录下面所有的文件
//fs.readdir('./test',function(err,files){
//    console.log(files)
//});
////[ '1.js', 'package.json', 't' ]
//
////获取一个文件或者目录详情
//fs.readdir('./test',function(err,files){
//    //循环文件列表
//    files.forEach(function(file){
//        //获取文件详情
//        fs.stat('./test'+file,function(err,state){
//            console.log(state);
//        })
//    })
//});
//是否存在一个文件/文件夹
fs.exists('./test',function(exists){
    console.log(exists);
});