const goodSearch = (callback) => {
  setTimeout(() => {
    console.log("상품조회");
    callback();
  }, 3000);
};
const cart = (callback) => {
  setTimeout(() => {
    console.log("카트담기");
    callback();
  }, 2000);
};
const account = (callback) => {
  setTimeout(() => {
    console.log("결제하기");
    callback();
  }, 4000);
};

const delivery = () => console.log("배송하기");

goodSearch(() => {
  cart(() => {
    account(()=>{
      delivery()
    });
  });
});

/* 
  이처럼 순서대로 일처리하기 위해 콜백을 계속 반복해서 작성해야하고
  바깥쪽에서 안쪽으로 계속적인 들여쓰기가 되면서 해석하기 불편, 유지보스 어려워짐
  이것을 콜백지옥
*/