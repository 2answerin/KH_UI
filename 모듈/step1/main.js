/* const double = (x) => {
  return x * 2;
}; */

const hap = (x, y) => {
  setTimeout(() => {
    return x + y;
  }, 2000);
};

const x = hap(100);
console.log("x: " + x);
const y = x;
console.log("y: " + y);
