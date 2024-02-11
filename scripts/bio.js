let list = [
  {
    name: "Victor Pinto",
    date: "11/02/2023",
    message:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Christina Cabrera",
    date: "10/28/2023",
    message:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Isaac Tadesse",
    date: "10/20/2023",
    message:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const form = document.querySelector(".comment__form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const currentDate = new Date().toLocaleDateString("en-US");
  list = [
    {
      name: e.target.name.value,
      date: currentDate,
      message: e.target.message.value,
    },
    ...list,
  ];

  const comments = document.querySelector(".comment__example");
  comments.innerHTML = ``;

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
    date.innerText = item.date;
    info.appendChild(name);
    info.appendChild(date);
    form.appendChild(info);

    const text = document.createElement("p");
    text.classList.add("comment__text");
    text.innerText = item.message;
    form.appendChild(text);

    comment.appendChild(form);
    comments.appendChild(comment);
  });

  form.reset();
});
