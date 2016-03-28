/**
 * Created by hu on 2016/3/26.
 */
function render(tmp,data){
    return tmp.replace(/\{\{(\w+)\}\}/,function(input,group){
        //这是replace的语法
        console.log(arguments);
        /*{ '0': '{{title}}',
            '1': 'title',
            '2': 4,
            '3': '<h1>{{title}}</h1>' }*/
        return  data[group];

    })
}
//内容要和属性一样 不然取到的不能当做属性名
var result=render('<h1>{{title}}</h1>',{title:'welcome'});

console.log(result);