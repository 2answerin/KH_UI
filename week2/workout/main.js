let items = [
  { id: 1, name: "벤츠", count: 0 },
  { id: 2, name: "티코", count: 0 },
  { id: 3, name: "람보르기니", count: 0 },
];

// 아이템 추가
const itemsAdd = () => {
  const workouts = [...items, { id: items.length + 1, name: null, count: 0 }];
  console.log(workouts);
  console.log(items);
};

const itemsDelete = (id) => {
  const workouts = items.filter((item) => item.id != id);
  console.log(workouts);
  items = [...workouts];
};

//itemsDelete(2)
itemsAdd();

//console.log(items);
