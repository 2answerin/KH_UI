let car = {
  name: "소나타",
  wheeINum: 4,
  speed: 0,
  carColor: "red",
};

console.log(car);
car.carColor = "black"; //재할당
console.log(
  `내 자동차는 ${car.name}이고 바튀수는 ${car["wheeINum"]}이고 색상은 ${car.carColor}입니다`
);
