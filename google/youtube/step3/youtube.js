const keyword = document.querySelector("#keyword");

keyword.addEventListener("keypress", (event) => {
  console.log("onkeypress가 엔터임?" + event.keyCode);
  //사용자가 입력한 검색어를 찾는 함수 호출
  handleSearch();
});
//사용자가 입력한 검색어 읽어오기
const handleSearch = () => {
  const user = document.querySelector("#keyword").value;
  console.log("사용자가 입력한 검색어 => " + user);
  search(user);
};
//사용자가 입력한 검색어로 조건 검색 구현하기
const search = (query) => {
  console.log("사용자가 입력한 검색어 받음 : " + query);
  
  const ajax = new XMLHttpRequest();
  const videoList = [];
  const key = "AIzaSyDZM_v974F6EGAZNzTfqsX-zEXTWu7OedY";
  const SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${key}`;

  ajax.open("GET", SEARCH_URL, false);
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
  document.querySelector("#root").innerHTML = videoList.join("");
}; //end of search
