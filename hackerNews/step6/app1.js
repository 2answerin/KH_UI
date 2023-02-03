const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT = "https://api.hnpwa.com/v0/item/@id.json";
const container = document.querySelector("#title");
const divcontent = document.createElement("div");
function getData(url) {
  xhr.open("GET", url, false);
  xhr.send();
  return JSON.parse(xhr.responseText);
}

const news = getData(NEWS);
const ul = document.createElement("ul");

window.addEventListener("hashchange", function () {
  const id = this.location.hash.substring(1);

  const newscontent = getData(CONTENT.replace("@id", id));
  const h1 = this.document.createElement("h1");
  container.innerHTML = `
  <h1>${newscontent.title}</h1>
  <div>
    <a href='#'>목록으로</a>
  </div>
  `;
});

for (let i = 0; i < 10; i++) {
  const div = document.createElement("div");
  div.innerHTML = `
  <li>
    <a href='#${news[i].id}'>
      ${news[i].title}(${news[i].comments_count})
    </a>
  </li>
  `
  ul.appendChild(div.firstElementChild);
}
container.appendChild(ul);
container.appendChild(divcontent);
