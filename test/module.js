/**
 * Created by hu on 2016/2/21.
 */
//ģ�飺һ��ʵ��ĳЩ�ض����ܵ��ļ� ��ʵ��ģ�黯���
//-ͨ��require����ģ����������ģ��

//��������������ģ��
//require('./sum.js'); //js��׺��ʡ��

//-ģ���еĹ��ܣ�������������ͨ������exports�����ĳ�������ṩ��������ʹ��
var sum=require('./sum.js');
//require�õ���sum�����൱��sum.js���exports����
console.log(sum.sum(100));
console.log(sum.a);

//��
//��װ npm install ����
//ɾ�� npm remove ����