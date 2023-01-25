const user = document.querySelector(".user_input");
const btnAdd = document.querySelector(".btn_add");
/* 시스템에서 이벤트가 감지되었을 때 */
btnAdd.addEventListener("click", function (e) { /* function (e) 콜백함수 */
  console.log("plus버튼 호출");
  addRow();
});

user.addEventListener("keypress", (e) => {
  console.log("key ==> " + e.key);
  /* == 값만 같은지 비교 === 타입, 값이 같은지 비교 */
  if (e.key === "Enter") {
    console.log("Enter 이벤트 호출 성공");
    addRow();
  }
});

function addRow() {
  // 사용자가 입력한 명을 받아옴
  const workName = user.value;
  console.log(`사용자가 입력한 값 => ${workName}`);
  if(workName === ""){
    user.focus(); // 커서의 위치는 input type = text로 가져옴
    return; // addRow 탈출
  }
  // 위 조건을 수렴하지 않으면 input text를 초기화 함
  user.value = "";
  user.focus(); // 커서 깜빡임
}
