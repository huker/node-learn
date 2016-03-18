/**
 * Created by hu on 2016/3/16.
 */
var http=require('http');
var fs=require('fs');
var url=require('url');
//用来解析表单的（此处解析上传的图片）第三方　需要安装
var formidable=require('formidable');
var querystring=require('querystring');
var util=require('util');
var mime=require('mime');
var server=http.createServer(function(req,res){
    //这个parse一定会返回一个对象
    //true的话urlobj的query也会是一个对象 否则是个字符串
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    if(pathname=='/'){
        fs.readFile('./form2.html','utf-8',function(err,data){
            res.end(data);
        })
    }else if(pathname=='/reg'){
        //接受请求体的内容
        var str='';　//这里不赋值下面就变成undefined
        req.on('data',function(data){
            //console.log(data);
            str+=data;
        });
        req.on('end',function(){
            //取出请求体的内容类型
            var contentType=req.headers['content-type'];
            //如果请求体发过来的是序列化表单
            if(contentType=='application/x-www-form-urlencoded'){
                var obj=querystring.parse(str);
                console.log(obj);
            }else if(contentType=='application/json'){
                var obj=JSON.parse(str);
                console.log(obj);
            }
            //console.log(str);
            res.end('ok');
        })
    }else if(pathname=='/reg2'){
        //构建一个解析器
        var form = new formidable.IncomingForm();
        //用解析器对请求体解析
        //把非file的input放在fields里面
        form.parse(req, function(err, fields, files) {
            //inspect是把对象转成字符串
            var path=files.avatar.path;
            fs.readFile(path,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    var filename='/imgs/'+files.avatar.name;
                    fs.writeFile('.'+filename,data, function (err) {
                        res.writeHead(200, {'content-type': 'text/plain'});
                        res.end(filename);
                    });
                }
            });

            //res.end(util.inspect({fields: fields, files: files}));
        });
    }else{
        fs.exists('.'+pathname,function(exists){
            if(exists){
                //文件类型多种多样所以要写响应头 告诉浏览器发他起的响应是什么格式的 才能读
                res.setHeader('Content-type',mime.lookup(pathname));
                fs.readFile('.'+pathname,function(err,data){
                    res.end(data);
                });
            }else{
                res.statusCode=404;
                res.end('404');
            }
        })
    }
});
/*这里返回的内容

{ fields: { username: 'dre', password: 'erer' },
    files:
    { avatar:
        File {
        domain: null,
            _events: {},
        _eventsCount: 0,
            _maxListeners: undefined,
            size: 36616,
            path: 'C:\\Users\\hu\\AppData\\Local\\Temp\\upload_5aac12cc357a19c28d39410f631e2e24',
            name: 'IMG_8383.PNG',
            type: 'image/png',
            hash: null,
            lastModifiedDate: Thu Mar 17 2016 16:14:12 GMT+0800 (中国标准时间),
            _writeStream: [Object]
            }
      }
}
*/

server.listen(8002);