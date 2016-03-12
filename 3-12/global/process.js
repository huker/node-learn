/**
 * Created by hu on 2016/3/12.
 */

console.log(process.cwd());
//e:\git\node-learn\3-12\global

//process.chdir('../ajax');
//e:\git\node-learn\3-12\ajax

process.chdir('txt');

console.log(process.cwd());
//e:\git\node-learn\3-12\global\txt

var fs=require('fs');

console.log(fs.readFileSync('./index.txt','utf-8'));
/*
* 改变当当前路径 读取的路径就不用改了
* e:\git\node-learn\3-12\global\txt
* */