const shows = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

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
  date.innerText = show.date;
  typeDate.appendChild(dateHeading);
  typeDate.appendChild(date);

  const typeVenue = document.createElement("div");
  typeVenue.classList.add("shows__detials");
  const venueHeading = document.createElement("p");
  venueHeading.classList.add("shows__heading");
  venueHeading.classList.add("shows__heading--block");
  venueHeading.innerText = "VENUE";
  const venue = document.createElement("p");
  venue.innerText = show.venue;
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
