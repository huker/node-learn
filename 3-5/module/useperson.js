/**
 * Created by hu on 2016/3/5.
 */
var person=require('./person.js');
//var p=new person.person('name');
var person2=require('./person2.js');
//var a=new person('1');
//console.log(a);
person.person();
person2.person();
//console.log(require.cache);
//������������key
console.log(Object.keys(require.cache));
//ɾ���ڶ�������
delete require.cache[Object.keys(require.cache)[1]];
var person=require('./person.js');
