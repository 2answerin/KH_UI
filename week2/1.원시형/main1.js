// 객체 데이터

const student = {
  name: `이순신`,
  age: 45,
  tel: null,
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student[`name`]);
console.log(student.tel);
console.log(student.email);

/*
  자료형(Date Type)
  자료형의 종류
  1.원시형 자료(primative type) : 특정값이 메모리에 저장(값만)
  -문자형([Object String]) slice(8,-1)
  -숫자형(Number)
  -논리형(Boolean : true, false)
  -undefinde : 변수를 선언하고 그 값을 초기화하지 않으면 undefined 저장
  (에러의 원인)
  2.참조형 자료(reference type) 
  :값이 위치하고 있는 참조 주소값만 메모리에 저장됨
  (관련된 내장함수까지 같이 참조됨 : 기억)
  -null(Object) : 명시적으로 특정 변수값을 비워둘 때
  -array(Object) : 연관된 값들을 그룹으로 묶어 관리함 -> []
  -객체 -> {} : Object 데이터를 key라는 인덱싱을 통해 자료를 구조적으로 묶어놓은 형태
*/
