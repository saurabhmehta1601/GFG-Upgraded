// insert dom element as before sibling to current element

const article = document.querySelector("article");
console.log("content script is loaded  👍");

if (article) {
  const readtime = Math.round(article.textContent.split(" ").length / 200);
  const articleTitle = document.querySelector(".article-title");

  const readtimeEl = document.createElement("div");

  // readtime element styles
  readtimeEl.style.fontSize = "1.35rem";
  readtimeEl.style.display = "flex";
  readtimeEl.style.alignItems = "center";
  readtimeEl.style.margin = "0.5em 0";

  readtimeEl.innerHTML = `
    <span>Reading time </span> <span class='clock'> ⏲️</span> <span>: ${readtime} mins </span>
    `;

  const clock = readtimeEl.querySelector("span.clock");
  //    clock styles
  clock.style.fontSize = "1.5rem";
  clock.style.margin = "0 .2em";

  articleTitle.insertAdjacentElement("afterend", readtimeEl);
}
