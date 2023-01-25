const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const { e = 5 } = obj;
const { y = 5 } = obj;
console.log(e);
console.log(y);

const arr = [1,2,3,4,5]
const [i,j, ...rest] = arr
console.log(i);
console.log(j);
console.log(rest);