const date = new Date();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCal = () => {
  date.setDate(1);

  const daysOfMonth = document.querySelector(".days-of-month");

  const lastDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const lastDayOfPrevMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay() - 1;

  const lastDayIndex =
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay() - 1;

  const nextDays = 7 - lastDayIndex - 1;

  document.querySelector(".date h2").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = date.getFullYear();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-month-date">${lastDayOfPrevMonth - x}</div>`;
  }

  for (let index = 1; index <= lastDayOfMonth; index++) {
    if (
      index === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${index}</div>`;
    } else {
      days += `<div class="day">${index}</div>`;
    }
  }

  for (let n = 1; n <= nextDays; n++) {
    days += `<div class="next-month-date">${n}</div>`;
  }

  daysOfMonth.innerHTML = days;
};

document.querySelector(".prev-month-arrow").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCal();
});

document.querySelector(".next-month-arrow").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCal();
});

renderCal();

let selectedDate = document.querySelector(".selected-date");

document.querySelectorAll(".day").forEach((day) => {
  day.addEventListener("click", (e) => {
    let calDate = e.currentTarget.innerText;
    let ending = "";
    if (calDate == 1) {
      ending = "st";
    } else if (calDate == 2) {
      ending = "nd";
    } else if (calDate == 3) {
      ending = "rd";
    } else {
      ending = "th";
    }

    selectedDate.innerHTML = `
    ${calDate}${ending} of ${months[date.getMonth()]}
    `;
  });
});
