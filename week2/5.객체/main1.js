const studentA = {
  name: "우주",
  age: 4,
  
};
const studentB = {
  name: "지구",
  age: 2,
  parent : studentA
};
const studentC = {
  name: "담이",
  age: 0.5,
};

console.log(studentA);
console.log(studentC);

const students = [studentA, studentC]

console.log(students[0]);
console.log(students[1]);
console.log(students[0].name);
console.log(students[0].age);
console.log(students[1]['parent']['name']);