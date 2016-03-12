/**
 * Created by hu on 2016/3/12.
 */
 //获取模块文件的绝对路径
console.log(__filename);

//文件夹所在目录的路径
console.log(__dirname);

var a=10;
console.log(global);
/*
* 1.global属性可以不引用 也可以不声明 就直接用
* 2.在node中在模块中能直接使用的有两种
*    1是全局对象下的属性
*
* */