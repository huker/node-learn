/**
 * Created by hu on 2016/2/19.
 */

//����ִ����صķ�װ����
//process.stdout -->standard output ��׼����Ϣ���
//process.stderr -->standard error ��׼�Ĵ������

//console.֮����ǵ���������������

process.stdout.write('this is stdout');

process.stderr.write('this is stderr');

//ͨ��write���������־
//������console ����

//�û���������
//�����ñ��� ��ȡ���ı�����utf-8 ��������ϲ�һ��
process.stdin.setEncoding('utf-8');

process.stdin.on('data',function(data){
    console.log(data)
});
//ͨ��on���� ��data�¼� �ص�������ӡ���������������


