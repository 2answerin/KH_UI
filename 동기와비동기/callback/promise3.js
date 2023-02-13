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
  .then(() => {
    return cart();
  })
  .then(() => {
    return account();
  })
  .then(() => {
    return delivery();
  });
