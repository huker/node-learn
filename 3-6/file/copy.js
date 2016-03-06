/**
 * Created by hu on 2016/3/6.
 */
//把src里的文件内容 写到tar文件里面
//清空再写入
var fs=require('fs');

//拷贝还要考虑文件形式 图片就是二进制编码 所以不能死锁utf-8
function copy(src,target){
    fs.readFile(src,function(err,data){
        if(err){
            console.log(err)
        }else{
            fs.writeFile(target,data);
        }
    });
}
copy('./name.txt','./target.txt');