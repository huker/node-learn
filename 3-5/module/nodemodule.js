/**
 * Created by hu on 2016/3/5.
 */

//加载fs核心模块 在node.exe内部
var fs=require('fs');
fs.readFile('./index.html');


//第三方模块
var mime=require('mime');
console.log(mime);