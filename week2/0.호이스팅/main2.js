// 호이스팅 때문에 선언이 끌어올려져서 오류 안남.
let text; // 선언만, 초기화 X
console.log(text); // (선언 + 초기화 된 상태)
text = 'Hanamon!'; // (선언 + 초기화 + 할당 된 상태)
console.log(text);
// 자바스크립트에서는 타입이 런타임시에 결정됨