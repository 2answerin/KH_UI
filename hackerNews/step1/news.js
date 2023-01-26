const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result)) /* result에서 받아주는 값 = json */
  .then((result) => {
    const ul = document.createElement("ul"); /* DOM API */
    for (let i = 0; i < 20; i++) {
      const li = document.createElement("li");
      li.innerHTML = result[i].title;
      ul.appendChild(li);
      console.log(result[i].title);
    } // end of for
    document.getElementById("root").appendChild(ul);
  })
  .catch((error) =>
    console.log("error", error)
  ); /* json에서 에러 발생시 catch */