/**
 * Created by hu on 2016/3/18.
 */
var fs=require('fs');
var ws=fs.createWriteStream('./write.txt',{
    flags:'a'
});

ws.write('你','utf-8',function(){
    console.log(arguments);
});
ws.write('是','utf-8',function(){
    console.log(arguments);
});
ws.end('智障','utf-8');

