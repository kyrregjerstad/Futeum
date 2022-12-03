const selectedDateAndTime = document.querySelector(".selected-date-and-time");

const decreaseEntry = document.querySelector("#decrease-entry");
const increaseEntry = document.querySelector("#increase-entry");
const numberOfEntryTickets = document.querySelectorAll(
  ".number-of-entry-tickets"
);
let entryTickets = 0;

const decreaseTour = document.querySelector("#decrease-tour");
const increaseTour = document.querySelector("#increase-tour");
const numberOfGuideTickets = document.querySelectorAll(
  ".number-of-guide-tickets"
);

let tourTickets = 0;

const guidedTourPrice = document.querySelector(".guided-tour-price");
const totalPrice = document.querySelector(".total-price");

selectedDateAndTime.innerText = sessionStorage.getItem("dateAndTime");

decreaseEntry.addEventListener("click", () => {
  if (entryTickets > 0) {
    entryTickets--;
  } else {
    return;
  }
  numberOfEntryTickets.forEach((location) => {
    location.innerText = entryTickets;
  });
});

increaseEntry.addEventListener("click", () => {
  entryTickets++;
  numberOfEntryTickets.forEach((location) => {
    location.innerText = entryTickets;
  });
});

decreaseTour.addEventListener("click", () => {
  if (tourTickets > 0) {
    tourTickets--;
  } else {
    return;
  }
  numberOfGuideTickets.forEach((location) => {
    location.innerText = tourTickets;
  });
  guidedTourPrice.innerText = tourTickets * 75;
  totalPrice.innerText = tourTickets * 75;
});

increaseTour.addEventListener("click", () => {
  tourTickets++;
  numberOfGuideTickets.forEach((location) => {
    location.innerText = tourTickets;
  });
  guidedTourPrice.innerText = tourTickets * 75;
  totalPrice.innerText = tourTickets * 75;
});
