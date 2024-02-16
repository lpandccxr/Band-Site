import BandSiteApi from "./band-site-api.js";

const showsClass = new BandSiteApi("eab30806-8fdc-432d-8db2-e067e49bb38c");

let shows = [];
await showsClass.getShow().then((response) => {
  shows = response;
}); //fetch the shows from api

//render heading of show
const heading = document.querySelector(".shows__heading--top");
const date = document.createElement("span");
date.classList.add("shows__type");
date.innerText = "DATE";
heading.appendChild(date);

const venue = document.createElement("span");
venue.classList.add("shows__type");
venue.classList.add("shows__type--second");
venue.innerText = "VENUE";
heading.appendChild(venue);

const loca = document.createElement("span");
loca.classList.add("shows__type");
loca.innerText = "LOCATION";
heading.appendChild(loca);

//render shows
const tickets = document.querySelector(".shows__tickets");
shows.forEach((show) => {
  const blocks = document.createElement("div");
  blocks.classList.add("shows__block");

  const typeDate = document.createElement("div");
  typeDate.classList.add("shows__detials");
  const dateHeading = document.createElement("p");
  dateHeading.classList.add("shows__heading");
  dateHeading.classList.add("shows__heading--block");
  dateHeading.innerText = "DATE";
  const date = document.createElement("p");
  date.classList.add("shows__date");
  date.innerText = new Date(show.date).toLocaleDateString("en-US");
  typeDate.appendChild(dateHeading);
  typeDate.appendChild(date);

  const typeVenue = document.createElement("div");
  typeVenue.classList.add("shows__detials");
  const venueHeading = document.createElement("p");
  venueHeading.classList.add("shows__heading");
  venueHeading.classList.add("shows__heading--block");
  venueHeading.innerText = "VENUE";
  const venue = document.createElement("p");
  venue.innerText = show.place;
  typeVenue.appendChild(venueHeading);
  typeVenue.appendChild(venue);

  const typeLocation = document.createElement("div");
  typeLocation.classList.add("shows__detials");
  const locationHeading = document.createElement("p");
  locationHeading.classList.add("shows__heading");
  locationHeading.classList.add("shows__heading--block");
  locationHeading.innerText = "LOCATION";
  const location = document.createElement("p");
  location.innerText = show.location;
  typeLocation.appendChild(locationHeading);
  typeLocation.appendChild(location);

  const button = document.createElement("button");
  button.classList.add("shows__button");
  button.innerText = "BUY TICKET";

  blocks.appendChild(typeDate);
  blocks.appendChild(typeVenue);
  blocks.appendChild(typeLocation);
  blocks.appendChild(button);
  tickets.appendChild(blocks);
});

//handlling shows selected
const clicked = document.querySelectorAll(".shows__block");
const buttonClicked = document.querySelectorAll(".shows__button");

clicked.forEach((click) => {
  const button = click.childNodes[3];
  button.addEventListener("click", () => {
    clicked.forEach((clicks) => {
      clicks.classList.remove("shows__block--active");
    });
    buttonClicked.forEach((button) => {
      button.classList.remove("shows__button--active");
    });
    button.classList.add("shows__button--active");
    click.classList.add("shows__block--active");
  });
});
