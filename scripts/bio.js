import BandSiteApi from "./band-site-api.js";

const commentClass = new BandSiteApi("aadbb0c6-d244-4158-8451-e32ca8f14244");

function sortList(list) {
  list.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
}

async function renderComments() {
  const comments = document.querySelector(".comment__example");
  const list = await commentClass.getComments();
  sortList(list);
  comments.innerHTML = ``; //clean out rendering

  list.forEach((item) => {
    const comment = document.createElement("div");
    comment.classList.add("comment__section");

    const portrait = document.createElement("div");
    portrait.classList.add("comment__portrait");
    comment.appendChild(portrait);

    const form = document.createElement("div");
    form.classList.add("comment__form");

    const info = document.createElement("div");
    info.classList.add("comment__info");
    const name = document.createElement("span");
    name.classList.add("comment__name");
    name.innerText = item.name;
    const date = document.createElement("span");
    date.classList.add("comment__date");
    date.innerText = new Date(item.timestamp).toLocaleDateString("en-US");
    info.appendChild(name);
    info.appendChild(date);
    form.appendChild(info);

    const text = document.createElement("p");
    text.classList.add("comment__text");
    text.innerText = item.comment;
    form.appendChild(text);

    const likeBlock = document.createElement("button");
    likeBlock.classList.add("comment__like");
    likeBlock.setAttribute("id", item.id);
    const likeIcon = document.createElement("img");
    likeIcon.setAttribute("src", "./assets/Icons/SVG/icon-like.svg");
    likeBlock.appendChild(likeIcon);
    const likeNum = document.createElement("span");
    likeNum.innerHTML = item.likes;
    likeBlock.appendChild(likeNum);
    form.appendChild(likeBlock);

    comment.appendChild(form);

    const del = document.createElement("button");
    del.classList.add("comment__delete");
    del.setAttribute("id", item.id);
    del.innerText = "X";
    comment.appendChild(del);

    comments.appendChild(comment);
  });
}

await renderComments(); //default rendering

const form = document.querySelector(".comment__form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newComment = {
    name: e.target.name.value,
    comment: e.target.message.value,
  };
  await commentClass.postComment(newComment);
  await renderComments(); //render the list again
  form.reset(); //rest form input filed
});

const dele = document.querySelectorAll(".comment__delete");
dele.forEach((del) => {
  del.addEventListener("click", async (e) => {
    await commentClass.deleteComment(del.getAttribute("id"));
    await renderComments();
  });
});

const like = document.querySelectorAll(".comment__like");
like.forEach((item) => {
  item.addEventListener("click", async (e) => {
    console.log("like clicked");
    await commentClass.likeComment(item.getAttribute("id"));
    await renderComments();
  });
});
