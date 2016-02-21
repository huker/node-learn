/**
 * Created by hu on 2016/2/21.
 */
//模块：一个实现某些特定功能的文件 以实现模块化编程
//-通过require（传模块名）引入模块

//引入求和这个功能模块
//require('./sum.js'); //js后缀可省略

//-模块中的功能（变量　函数）通过赋给exports对象的某个属性提供给调用者使用
var sum=require('./sum.js');
//require得到的sum对象相当于sum.js里的exports对象
console.log(sum.sum(100));
console.log(sum.a);

//包
//安装 npm install 名字
//删除 npm remove 名字