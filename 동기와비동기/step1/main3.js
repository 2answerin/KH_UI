const btnCart = document.querySelector("#btnCart");
//자바스크립트는 기본적으로 동적처리
//그러나 실샐활에서는 비동기적 상황들이 더 많음
btnCart.addEventListener("click", () => {
  console.log("카트담기");
});
console.log("여기");
