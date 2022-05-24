const xmlns = "http://www.w3.org/2000/svg";
const xlinkns = "http://www.w3.org/1999/xlink";

// const addItem = (itemText) => {
//   // TODO: implement
// };

// const addItemFromInput = () => {
//   // TODO: implement
// };

// addEventListener('load', () => {
//   addItem('Read the description');
//   addItem('Solve the task');
//   addItem('Submit the solution');

//   document.querySelector('.todo__input').addEventListener('keydown', (e) => {
//     if (e.keyCode === 13) {
//       e.preventDefault();
//       addItemFromInput();
//     }
//   });

//   document
//     .querySelector('.todo__create')
//     .addEventListener('click', () => addItemFromInput());
// });
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednessday",
  "thursday",
  "friday",
  "saturday",
];

const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
const weekday = document.querySelector(".todo__weekday");
const date = document.querySelector(".todo__fulldate");

const d = new Date();
const today = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}  `;

weekday.innerHTML = days[new Date().getDay()];
date.innerHTML = today;

const inputValue = document.querySelector(".todo__input");

const addIcon = document.querySelector(".todo__create");
const todoCont = document.querySelector(".todo__items-container");

let todo = [];

addIcon.addEventListener("click", () => {
  const value = inputValue.value;
  if (value) {
    const element = document.createElement("div");
    element.classList.add("li-item");
    element.innerHTML = `<li>${value}</li>
              <svg viewBox="0 0 200 200" class="icon close">
                <use xlink:href="#icon-delete"></use>
              </svg>`;
    todoCont.appendChild(element);
    inputValue.value = "";
  } else {
  }

  const close = document.querySelectorAll("svg.close");

  const closeBtn = Array.from(close);

  closeBtn.map((btn) => {
    btn.addEventListener("click", (e) => {
      const element = e.currentTarget.parentNode;
      const parent = element.parentNode;
      parent.removeChild(element);
    });
  });
});
