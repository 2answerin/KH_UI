const colors = ["red", "green", "blue"];
console.log(colors);

// arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
// arrow function에서 [ES6]는 파라미터가 한대면 괄호 생략 가능
// arrow function에서는 실행문이 단일행이면 좌중괄호 우중괄호 생략 가능

colors.forEach((color) => console.log(color))
colors.forEach((color) => { // 함수의 이름이 없음 - 사용자 호출 불가
  // console.log(color);
});

colors.forEach(function (color, index, colors) {
  console.log(color);
});

colors.forEach(function (color) {
  console.log(color);
});
