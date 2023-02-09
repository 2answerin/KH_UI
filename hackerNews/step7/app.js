const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT = "https://api.hnpwa.com/v0/item/@id.json";
const container = document.querySelector("#title");
const divcontent = document.createElement("div");
// 페이징처리 -1step
const store = {
  currentPage: 1, //현재 내가 바라보는 페이지 번호
};
//현재 페이지가 몇번째 페이지인지 알고 있어야 함 - 반드시 let
function getData(url) {
  xhr.open("GET", url, false);
  xhr.send();
  return JSON.parse(xhr.responseText);
}

// 뉴스 목록 가져오기
function newsList() {
  const news = getData(NEWS);
  const getList = [];
  getList.push("<ul>");
  for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {
    getList.push(`
    <li>
    <a href = '#/show/${news[i].id}'>
    ${news[i].title}(${news[i].comments_count})
    </a>
    </li>
    `);
  }
  // 배열 맨 뒤에 추가하는 함수 push
  getList.push("</ul>"); //getList 배열
  getList.push("<div>");
  getList.push(
    `<a href = '#/page/${
      store.currentPage > 1 ? store.currentPage - 1 : 1
    }'>이전페이지</a>`
  );
  getList.push("&nbsp;&nbsp"); // 링크 사이 공백
  getList.push(`<a href = '#/page/${store.currentPage + 1}'>다음페이지</a>`);
  getList.push("</div>");
  // 빈문자열 주면 구부낮 없는 하나의 합쳐진 HTML문자열 얻음
  container.innerHTML = getList.join("");
}

// 뉴스 상세 내용보기
function newsDetail() {
  const id = this.location.hash.substring(7); // 상세보기 앞에 #/show/가 있으니까
  const newscontent = getData(CONTENT.replace("@id", id));
  container.innerHTML = `
  <h1>${newscontent.title}</h1>
  <div>
    <a href='#/page/${store.currentPage}'>목록으로</a>
  </div>
`;
}

// 라우터에서 화면 전환하기
function router() {
  // 글 목록의 링크는 #. 그러면 location.href에 #이 들어왔을텐데 왜 그게 참일까
  // location.href에 #만 들어오면 빈값을 반환
  // 그래서 이 코드가 작동하는 것
  const routePath = location.hash;
  // 첫 진입일 때는 newsList를 호출함
  if (routePath === "") { //처음 요청시에는 해시값이 없으니까 여기가 실행됨
    newsList();
  } else if (routePath.indexOf("#/page/") >= 0) {
    //해시값 중에서 숫자값만 추출하기
    //#를 제거하고 문자열 길이를 계산 후 문자열을 숫자로 바꾸어야 함
    store.currentPage = Number(routePath.substring(7))
    newsList()
  } else {
    newsDetail();
  }
}

window.addEventListener("hashchange", router);
router();
