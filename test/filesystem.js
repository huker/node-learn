/**
 * Created by hu on 2016/2/21.
 */

//�ļ���ز���

//fsģ��
var fs=require('fs');

//��ȡ�ļ�
//1 �첽��ȡ ��ȡ�ļ���ʱ���ͨ�����ص������ڶ�ȡ�ļ���ɺ���ļ������ݴ�������
//fs.readFile('sum.js',function(err,data){
//    if(err){
//        console.log(err);
//    }
//    else{
//        console.log(data);
//    }
//});
//<Buffer 2f 2a 2a 0d 0a 20 2a 20 43 72 65 61
//sum.js��ÿ���ַ���ʮ�����Ƶ�ascII�� ����buffer��
//����console��������buffer���� ���涼��ascII��

//ֱ������ı������ַ���

//1 �ڶ���������ѡ��ѡ���ı���ʽ
//fs.readFile('sum.js','utf-8',function(err,data){
//    if(err){
//        console.log(err);
//    }
//    else{
//        console.log(data);
//    }
//});
//
////2 ����data��toString���� Ҳ���ǵ�����buffer��toString����
fs.readFile('sum.js',function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
});


//ͬ����ȡ�ļ� sync--��ͬ��
var data=fs.readFileSync('log.txt','utf-8');
console.log(data);

//�����첽��ǰ ͬ���ں�һ��ִ�е�ʱ�� ���ȴ�ӡ��������log������ �����sum������
//�첽��ȡ�ļ���ʱ�� node��Ѷ�ȡ�ļ��Ĺ����ں�̨���� ���Բ����ϻ�����������js�ļ���ִ�У�����Ĵ�����Լ���ִ��
//start async
//start sync
//end sync
//end async

//ͬ����ǰ��ʱ�� ͬ��������谭����Ĵ���ִ�� ��ִ����ͬ���� �ٿ�ʼ�첽��
//start sync
//end sync
//start async
//end async
