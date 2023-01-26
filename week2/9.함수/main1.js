(function(){
  const a = 1
  const b = 2
  console.log(a + b);
})();

function func1(){ // 이름이 있는 함수
  console.log('func1');
  func2(func1)
}

func1()

function func2(func1){
console.log(func1);
}

function hap(no1,no2){
  const result = no1 + no2
  return result
}

const tot = hap(5,2)
console.log(tot);