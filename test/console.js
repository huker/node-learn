/**
 * Created by hu on 2016/2/19.
 */

console.log('this is a log');
console.info('this is a info');
console.warn('this is a warn');
console.error('this is a error');

//�ض�����־�ļ�
//node console.js > log.txt ��log��info�������ض����ȥ
//node console.js 1>log.txt 2>error.txt �ֿ�������
//node console.js 1>log.txt 2>&1error.txt ��������־��Ϣ���Ž�log.txt

//time��timeEnd֮�����ִ�е�ʱ�� ����Ҫ��ͬ���ַ�����
//���������Դ������ܲ���
console.time('test');
for(var i=0;i<1000000;i++){}
console.timeEnd('test');
