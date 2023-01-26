let colors = ["red", "green", "blue"];

// 콜백함수 = 함수를 호출할 때 인수(파라미터)로 함수가 들어가는 형태
// arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])

/* colors.forEach(function(color,index,items){
  console.log(color);
  console.log(index);
  console.log(items);
}) */

/* colors.forEach((color,index) => {
  console.log(color);
  console.log(index);
}) */

colors.map(function(color,index){
  console.log(color);
  console.log(index);
})