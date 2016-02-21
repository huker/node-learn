/**
 * Created by hu on 2016/2/21.
 */
console.log(process.argv);
//process.argv是个数组 0是node命令的绝对路径 1是js的路径
//在cmd里后面用空格分开 能全输出来
//其实就是封装了cmd命令里启动node程序输入的命令 并用空格分开。存进数组
//所以可以通过这个获取输入node命令的内容 （数组的0 1被路径占用
