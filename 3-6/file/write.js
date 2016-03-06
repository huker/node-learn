/**
 * Created by hu on 2016/3/6.
 */
//写文件writeFile filename data [options] callback
var fs=require('fs');
//同步方式向硬盘文件里写数据
//fs.writeFileSync('./write.txt','lallaa');

//写入哪有data 不需要data
//默认传入的会覆盖原来的内容
//flag 是表示对文件做何种操作 默认w 清空并写入
fs.writeFile('./write.txt','dhiwuhiuewr',{flag:'a'},function(err){
    if(err){
        console.log(err);
    }
    //console.log(arguments);
});

//记起来麻烦 所以 appendFile 追加
fs.appendFile('./write.txt','node');
