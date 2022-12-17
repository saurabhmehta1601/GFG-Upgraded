// insert dom element as before sibling to current element

const article = document.querySelector("article");
console.log("content script is loaded  👍");

if (article) {
  const readtime = Math.round(article.textContent.split(" ").length / 200);
  const articleTitle = document.querySelector(".article-title");

  const readtimeEl = document.createElement("div");
  readtimeEl.textContent = `Readtime ⌚ : ${readtime} mins`;
  articleTitle.insertAdjacentElement("afterend", readtimeEl);
}
