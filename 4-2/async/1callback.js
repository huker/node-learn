

var fs=require('fs');

fs.readFile('1.txt','utf-8',function(err,data){
    fs.readFile(data,'utf-8',function(err,data){
        console.log(data)
    })
});