let colors = ["red", "green", "blue"]; //리터널 이용한 배열 선언 및 초기화

for (color in colors) {
  // 개선된 for문, 자바랑 다른점 in
  console.log(color, ",color:", colors[color]);
}
for (color of colors) {
  console.log("color:" + color);
}

let items = [
  { id: 1, name: "벤츠", count: 0 },
  { id: 2, name: "티코", count: 0 },
  { id: 3, name: "람보르기니", count: 0 },
];

for (let item of items) {
  console.log(item.id + item.name + item.count);
}

const student = {
  name: "고양이",
  age: 4,
  address: "이천",
};
for (let key in student) {
  console.log(key, ",", student[key]);
}
