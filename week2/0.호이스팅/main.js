func1()
func3() //함수 표현식에서는 호이스팅이 일어나지 않는다

function func1(){
  console.log('func1');
}
function func2(){
  console.log('func2');
}

// 함수 선언문에서도 호이스팅 일어남
// 뒤에 있는것이 메모리에 먼저 올라감

const func3 = function (){
  console.log('func3');
}