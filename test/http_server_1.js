/**
 * Created by hu on 2016/2/22.
 */

//����node sever��ôһ���ⲿ������
var http=require('http');
var fs=require('fs');

//����һ��sever����
//http��createServer���������Ǹ��ص�����
//request����������������� response�Ƕ���������������Ӧ
var server=http.createServer(function(request,response){
    fs.readFile('index.html','utf-8',function(err,data){
        response.end(data);
    });
    //response.end('<html><head><meta charset="UTF-8"></head><body><h2>���a�갮���갮</h2></body></html>');
});

//�����Ķ˿� һ���������һ���˿�
server.listen(8080);

//��һ��д��
//http.createServer(function(request,response){
//
//}).listen(8080);
