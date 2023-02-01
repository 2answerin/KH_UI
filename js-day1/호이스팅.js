console.log(text);
text = "hello";
var text;
console.log(text);

const btns = document.querySelectorAll("ul li");

/* for(var j = 0; j<btns.length;j++){
  btns[j].addEventListener('click',() => {
    console.log(j); // 3 3 3 3 3
  })
} */

// 즉시 실행 함수
for (var j = 0; j < btns.length; j++) {
  ((index) => {
    btns[j].addEventListener("click", () => {
      console.log(index);
    }
    )})(j)
} 

/* for (let j = 0; j < btns.length; j++) {
  btns[j].addEventListener("click", () => {
    console.log(j); // 0 1 2
  });
} */
