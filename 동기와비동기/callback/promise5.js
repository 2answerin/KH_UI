const goodSearch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("상품조회");
      resolve();
    }, 3000);
  });
};
const cart = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("카트담기");
      resolve();
    }, 2000);
  });
};
const account = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("결제하기");
      resolve();
    }, 2000);
  });
};

const delivery = () => console.log("배송하기");

goodSearch()
  .then(cart) //파라미터로 cart를 넘기면 resolve가 cart함수 전체를 받아서 처리
  .then(account) //account를 넘기면 resolve가 account함수 전체 받아서 처리
  .then(delivery)
  .then(() => console.log("배송완료"));
