/**
 * Created by hu on 2016/3/18.
 */
var fs=require('fs');

function copy(src,target){
    var rs=fs.createReadStream(src);
    var ws=fs.createWriteStream(target);
    rs.setEncoding('utf-8');
    //最好能读的快了就写的快点 慢了就写得慢点
    //用pipe 管道
    rs.on('data',function(data){
        ws.write(data);
    });
    rs.on('end',function(){
        ws.end();
    });
}

copy('./index.txt','./write.txt');