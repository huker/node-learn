/**
 * Created by hu on 2016/2/25.
 */
var http=require('http');
var url=require('url');

http.createServer(function(request,response){
    var urlObj=url.parse(request.url);
    console.log(urlObj);
    var pathname=urlObj.pathname();

    response.end('url parse')
}).listen(8080);
/*
����localhost:8080/query.html?xyz=abc
* Url {
 protocol: null,
 slashes: null,
 auth: null,
 host: null,
 port: null,
 hostname: null,
 hash: null,
 search: '?xyz=abc',
 query: 'xyz=abc',   --��get�����ύ�Ĳ��� �Ͳ�����ֵ
 pathname: '/query.html', --���������Դ resource
 path: '/query.html?xyz=abc',
 href: '/query.html?xyz=abc' }*/