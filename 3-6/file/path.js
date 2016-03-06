/**
 * Created by hu on 2016/3/6.
 */
var fs=require('fs');
var path=require('path');
//处理路径

//合并 连接路径 join会自动判断多个系统\ /
console.log(path.join('./test','1.json'));
//分隔符 seperator
console.log(path.sep);

console.log(__filename);
console.log(__dirname);
console.log(path.basename('7.path.js','.js'));
//扩展名
console.log(path.extname('path.js'));
//从一个相对路径解析出一个绝对路径
//以应用程序的所在目录为根
console.log(path.resolve('test','1.js'));
//回到上一级
console.log(path.resolve('test','1.js','..','package.json'));
