// 얕은복사(원본이바뀜, 동기화됨)와 깊은복사(복사본바뀜, 비동기화)

const colors = ["red", "green", "blue"];
const copy = [];

// 이전방식
for (let i = 0; i < colors.length; i++) {
  copy.push(colors[i]);
  console.log(`copy[${i}]: ${copy[i]}`);
}

// 이후방식
colors.forEach(function (color) {
  // copy.push(colors)
  console.log(`${copy}`);
});

["red", "green", "blue"].forEach((color) => {
  copy.push(color);
});

console.log(copy);