let newsData = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

function getNews() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(newsData);
    }, 1000);
  });
}

function addCard(news) {
  const template = document.getElementById("template1").content.cloneNode(true);
  template.querySelector(`.template1-title`).innerText = news.title;
  template.querySelector(`.template1-content`).innerText = news.content;
  document.querySelector("#template-insert").appendChild(template);
}

getNews().then((news1) => news1.forEach((news) => addCard(news)));

function newNews() {
  const newTitle = document.getElementById("title").value;
  const newContent = document.getElementById("content").value;
  const newNews = {
    title: newTitle,
    content: newContent,
  };
  newsData.push(newNews);
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}

setInterval(() => {
  getNews().then((news1) => {
    document.querySelector("#template-insert").innerHTML = "";
    news1.forEach((news) => addCard(news));
  });
}, 5000);
