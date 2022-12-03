const ordinal = (date) => {
  return (
    date +
    (31 == date || 21 == date || 1 == date
      ? "st"
      : 22 == date || 2 == date
      ? "nd"
      : 23 == date || 3 == date
      ? "rd"
      : "th")
  );
};

const date = new Date();
let selectedTime = "";
let selecedDate = "";

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

  document.querySelectorAll(".day").forEach((day) => {
    day.addEventListener("click", (e) => {
      document.querySelectorAll(".day").forEach((day) => {
        day.classList.remove("active-date");
      });
      e.currentTarget.classList.add("active-date");
      document.querySelector(".timeslots").classList.remove("hidden");
      document.querySelector(".selected-date").innerText = `
      ${ordinal(e.currentTarget.innerText)} ${months[date.getMonth()]}
      `;
      selecedDate = `${ordinal(e.currentTarget.innerText)} of ${
        months[date.getMonth()]
      }`;
    });
  });
};

document.querySelectorAll(".available-time").forEach((slot) => {
  slot.addEventListener("click", (e) => {
    document.querySelectorAll(".available-time").forEach((slot) => {
      slot.classList.remove("active-time");
    });
    selectedTime = e.currentTarget;
    selectedTime.classList.add("active-time");
    document.querySelector(".selected-date-and-time").innerText = `
     ${selecedDate} at ${selectedTime.innerText}`;
    sessionStorage.setItem(
      "dateAndTime",
      `${selecedDate} at ${selectedTime.innerText}`
    );
    document.querySelector(".button").classList.remove("hidden");
  });
});

document.querySelector(".prev-month-arrow").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCal();
});

document.querySelector(".next-month-arrow").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCal();
});

renderCal();
