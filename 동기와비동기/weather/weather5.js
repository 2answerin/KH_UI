import { weatherKey } from "../../apiKEY.js";

const getWeather = (local, callback) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=${weatherKey}&q=${local}&units=metric`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        resolve();
      });
  });
};

//promise가 반환하는 함수에서만 await을 붙여야함
//console.log에는 await을 붙이지않음
//acync와 await은 함께 사용됨

const runTest = async () => {
  await getWeather("seoul");
  console.log("서울 날씨 가져오기");
  await getWeather("busan");
  console.log("부산 날씨 가져오기");
  await getWeather("incheon");
  console.log("인천 날씨 가져오기");
};

runTest();

/* 
  날씨 제공하는 서버에 다녀오는 시간이 걸리므로
  어느 지역이 먼저 처리될 지 알 수 없음
  순서가 다를 수 있음 - 실핼할 때 마다

  자바스크립트는 기본적으로 순서대로 처리됨 - 동기
  순서가 맞지 않는 것 - 비동기
*/
