/**
 * Created by hu on 2016/3/29.
 */
/*
* map 替换所有元素
* filter 过滤数组中的元素
* reduce 聚合
* reduceRight 从由往左聚合
* some 有一个满足条件
* every 全部满足条件
* indexOf 第一个索引
* lastIndexOf 最后索引
*这些方法不影响原来数组得到一个新的值，要改变的话 要赋值覆盖users=users.filter(...)这样
* */

//reduce
var nums=[1,2,3,5,2,3,1,7,3];
//0是初始值 第一次执行的时候就传进current 然后1传入next 接着一个个下去
var sum=nums.reduce(function(current,next){
    return current+next
},0);
//比大小
var max=nums.reduce(function(current,next){
    return next-current>0?next:current;
},0);

console.log(sum);
console.log(max);