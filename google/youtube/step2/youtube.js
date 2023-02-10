const ajax = new XMLHttpRequest();
//문자열 처리하는 경우가 훨씬 직관적 - 정적(고정) - 결정된 상태
//배열은 덜 함 - 뚝뚝 끊어짐 - 동적
const videoList = [];
const key = "AIzaSyDZM_v974F6EGAZNzTfqsX-zEXTWu7OedY";
const MOST_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`;

ajax.open("GET", MOST_URL, false);
ajax.send();

const most = JSON.parse(ajax.response);
const items = most.items;
console.log(items);
console.log(items.length); // 25
videoList.push(`<ul class = "videos"`);
for (let i = 0; i < items.length; i++) {
  // 25번 반복
  videoList.push(`<li class = "container">`);
  videoList.push(`<div class = "video">`);
  videoList.push(
    `<img class = "thumbnail" src = "${items[i].snippet.thumbnails.medium.url}">`
  );
  videoList.push(`<div>`);
  videoList.push(`<p class = "title"> ${items[i].snippet.title}</p>`);
  videoList.push(
    `<p class = "channelTitle"> ${items[i].snippet.channelTitle}</p>`
  );
  videoList.push(`</div>`);
  videoList.push(`</div>`);
  videoList.push(`</li>`);
}

videoList.push(`</ul>`);
document.querySelector("#root").innerHTML = videoList.join('');
