/**
 * Created by hu on 2016/2/19.
 */

//����ִ�У�process������صķ�װ����

//process.stdout -->standard output ��׼����Ϣ���
//process.stderr -->standard error ��׼�Ĵ������
//console.֮����ǵ���������������

process.stdout.write('this is stdout');

process.stderr.write('this is stderr');

//ͨ��write���������־
//������console ����

//stdin
//�û���������
//�����ñ��� ��ȡ���ı�����utf-8 ��������ϲ�һ��
process.stdin.setEncoding('utf-8');

//ͨ��on������data�¼� �ص�������ӡ���������������
//process.stdin.on('data',function(data){
//    console.log(data)
//});

//stdin��on������readable�¼��������Σ������Զ����գ���Ҫ��һ��read����ȡ�����
process.stdin.on('readable',function(){
   var data=process.stdin.read();
    console.log(data);
});


//cwd���������ִ��node�����·�� dirname��js�ļ��ľ���·��
//current working dir ��ǰ����Ŀ¼
//console.log(process.cwd());


//on
//exit ���������˳���ʱ�� ִ��exit�¼�
process.on('exit',function(){
   console.log('process will exit')
});

//SIGINT�¼� signal interrupted �����ж��ź�ʱ��������¼�
//��������stdin�������� cmd�ﰴctrl+c�˳��ͻᴥ��signint
//����on����������sigint�¼� �ı���ԭ������Ϊ ����ctrl c�����˳�
process.on('SIGINT',function(){
    console.log('process has a sigint.');
    process.exit();//�ֶ����� ʹ�����˳�
});

