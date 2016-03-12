/**
 * Created by hu on 2016/3/12.
 */
var querystring=require('querystring');
var s='name=hu&age=8';
console.log(querystring.parse(s));
//字符串和对象 互转
console.log(querystring.stringify(querystring.parse(s)))
