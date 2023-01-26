const colors = ['red','green','blue']
const c1 = colors[0]
console.log(colors);
console.log(c1);

// arr.filter(callback(element[, index[, array]])[, thisArg])

colors.filter(function(color){
  // 실행문
  console.log(color);
})

colors.filter(function(a, index, array){
  // 실행문
  console.log(index);
  console.log(a);
  console.log(array);
})

