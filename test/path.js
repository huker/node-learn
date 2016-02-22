/**
 * Created by hu on 2016/2/22.
 */

var path=require('path');

console.log(path.sep);
//输出的路径中的分隔符 \ (win系统),/(mac linux系统)
//拼接路径的时候 有了path.sep就不用判断操作系统了

console.log(path.extname('lalla.png'));
//获取文件扩展名 便利，不用使用正则或者字符串方法

