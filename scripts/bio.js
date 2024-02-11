const form = document.querySelector(".comment__form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const currentDate = new Date().toLocaleDateString("en-US");
  const comments = document.querySelector(".comment__example");
  comments.innerHTML =
    `<div class="comment__section">
      <div class="comment__portrait"></div>
      <div class="comment__form">
          <div class="comment__info">
              <span class="comment__name">${e.target.name.value}</span>
              <span class="comment__date">${currentDate}</span>
          </div>
          <p class="comment__text">${e.target.message.value}</p>
      </div>
  </div>` + comments.innerHTML;
  form.reset();
});
