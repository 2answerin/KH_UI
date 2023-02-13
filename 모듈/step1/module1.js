export default 10; //default는 하나만 내보냄
//default 사용하면 {} 사용 불가

export const insa = "hello";
export const names = ["apple", "kiwi", "tomato"];
export const hap = (i, j) => {
  return i + j;
}; //대입함수

export class Sonata {
  constructor() {
    this.wheeINum = 4;
    this.speed = 10;
  }
  speedUp = () => {
    this.speed = this.speed + 1;
  };
}

/* 
  호이스팅 이슈
  1. var i
  2. head태그안에 선언한 함수
  3. import문 - 모듈사용(ES6, 브라우저지원)

  함수선언
  1. 선언형 함수
  2. 익명함수 - 콜백함수 -> 나중에 실행, 자바스크립트는 동기적(순서대로)
  전제조건 : 자스에서는 함수도 객체
  3. 대입함수 - 일급함수 -> 고차함수(리턴,함수)(리덕스(리액트 상태관리 구현) 만드는데 결정적 역할) -> 리액트
  const func = () => {}
  4.즉시실행함수 (선언)(호출) - ES6 이전에는 호이스팅 이슈 해결 방법
*/
