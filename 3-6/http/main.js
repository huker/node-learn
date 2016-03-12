/**
 * Created by hu on 2016/3/12.
 */
var http=require('http');
var fs=require('fs');

var server=http.createServer(function(request,response) {
    fs.readFile('./index.html', 'utf8', function (err, data) {
        response.write(data);
        response.end();
    });
}).listen(8001);