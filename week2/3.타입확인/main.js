// Nullish

console.log(null ?? 1);
console.log(undefined ?? 2);
console.log(undefined ?? null);

console.log(null ?? 1 );
console.log(0 ?? 1 ?? 3);

// OR 연산자

const no = 0
const num = no || 7
const num2 = no ?? 7

console.log(num);
console.log(num2);