const keyword = document.querySelector("#keyword");

keyword.addEventListener("keypress", (event) => {
  //사용자가 입력한 검색어를 찾는 함수 호출
  handleSearch();
});

//사용자가 입력한 검색어 읽어오기
const handleSearch = () => {
  const user = document.querySelector("#keyword").value;
  console.log("사용자가 입력한 검색어 => " + user);
  search(user);
};
//video로 받아와서 구조분해해서 사용하면 안되나요..? 몰라용
//리액트에서는 가능, 바닐라에서는 불가능 - 덩어리(item)로 받아오기
let videoItem;
const videoShow = (id, title, description, channelTitle) => {
  videoItem = `
<section class = "detail">
<iframe id="player" type="text/html" width="640" height="500"
  src="http://www.youtube.com/embed/${id}"
  frameborder="0"></iframe>
  <h2>${title}</h2>
  <h3>${channelTitle}</h3>
  <pre class = "description">
  ${description}
  </pre>
  <div>
  <a href = "./youtube.html">이전페이지<a>
  &nbsp;
  <a href = "javascript:search('손흥민')">이전페이지2<a>
  </div>
</section>
`;
  document.querySelector("#root").innerHTML = videoItem;

  /* console.log( "videoShow, id = " + id + "," + title + "," + description + "," + channelTitle ); */
};

//사용자가 입력한 검색어로 조건 검색 구현하기
const search = (query) => {
  console.log("사용자가 입력한 검색어 받음 : " + query);

  const ajax = new XMLHttpRequest();
  const videoList = [];
  const key = "AIzaSyDZM_v974F6EGAZNzTfqsX-zEXTWu7OedY";
  const SEARCH_URL =
    "http://192.168.10.47:5500/google/youtube/step4/sample.json";

  ajax.open("GET", SEARCH_URL, false);
  ajax.send();

  const most = JSON.parse(ajax.response);
  const items = most.items;
  let items2;

  items2 = most.items.map((item) => ({ ...item, id: item.id.videoId }));

  console.log(items2);
  console.log(items.length); // 25

  videoList.push(`<ul class = "videos"`);
  items2.map((video) => {
    //자바스크립트는 파라미터로 값을 넘길 때 반드시 쿼테이션을 붙여야 값으로 인정됨
    //쿼테이션이 없다면 XXX is not defined - 변수취급
    //비디오 제목의 경우 특수문자(괄호..) 배제하는 정규식 이용
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    const str = video.snippet.title.replace(reg, "");
    videoList.push(
      `<li class = "container" onclick = "videoShow('${video.id}','${str}','${video.snippet.title}','${video.snippet.description}','${video.snippet.channelTitle}')">`
    );
    videoList.push(`<div class = "video">`);
    videoList.push(
      `<img class = "thumbnail" src = "${video.snippet.thumbnails.medium.url}">`
    );
    videoList.push(`<div>`);
    videoList.push(`<p class = "title"> ${video.snippet.title}</p>`);
    videoList.push(
      `<p class = "channelTitle"> ${video.snippet.channelTitle}</p>`
    );
    videoList.push(`</div>`);
    videoList.push(`</div>`);
    videoList.push(`</li>`);
  });
  videoList.push(`</ul>`);
  document.querySelector("#root").innerHTML = videoList.join("");
};
