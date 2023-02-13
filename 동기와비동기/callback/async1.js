//astnc와 await 활용

const goodSearch = (callbck) => {
  //resolve 성공시 콜백, reject 실패시 콜백
  return new Promise((resolve, reject) => {
    //고차함수 - 반환으로 함수
    setTimeout(() => {
      console.log("상품조회");
      resolve();
    }, 2000);
  });
};
const cart = (callback) => console.log("카트담기");

const runTest = async () => {
  await goodSearch();
  cart();
};

runTest();
