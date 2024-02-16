import BandSiteApi from "./band-site-api.js";

const commentClass = new BandSiteApi("eab30806-8fdc-432d-8db2-e067e49bb38c");

const comments = document.querySelector(".comment__example");

async function renderComments() {
  let list = [];
  await commentClass.getComments().then((response) => {
    list = response;
  }); //fetch the comments

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

    comment.appendChild(form);
    comments.appendChild(comment);
  });
}
renderComments();

const form = document.querySelector(".comment__form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const currentDate = new Date().toLocaleDateString("en-US");
  list.unshift({
    name: e.target.name.value,
    date: currentDate,
    message: e.target.message.value,
  }); //insert input comment
  comments.innerHTML = ``; //clean out rendering
  renderComments(); //render the list again
  form.reset(); //rest form input filed
});
