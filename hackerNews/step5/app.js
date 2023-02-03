const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT = "https://api.hnpwa.com/v0/item/@id.json";
const divcontent = document.createElement("div");
// 아래함수의 사용처는 두 군데
// 요청 URL만 바뀌고 나머지는 같아서 파라미터를 URL로 줌
function getData(url) {
  xhr.open("GET", url, false);
  xhr.send();
  return JSON.parse(xhr.responseText);
}

const news = getData(NEWS);
const ul = document.createElement("ul");

window.addEventListener("hashchange", function () {
  const id = this.location.hash.substring(1);

  const newscontent = getData(CONTENT.replace("@id", id))
  const h1 = this.document.createElement("h1");
  console.log(newscontent.title);
  h1.innerHTML = newscontent.title;
  divcontent.appendChild(h1);
});

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `#${news[i].id}`;
  a.innerHTML = `${news[i].title}(${news[i].comments_count})`;
  li.appendChild(a);
  ul.appendChild(li);
}
document.querySelector("#title").appendChild(ul);
document.querySelector("#title").appendChild(divcontent);
