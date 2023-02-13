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
const account = () => console.log("결제하기");


goodSearch(() => {
  cart(()=> {
    account()
  });
});