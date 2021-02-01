const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');
let timerId = null;

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

colorSwitch = () => {
  timerId = setInterval(() => {
    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const index = randomIntegerFromInterval(0, 5);
    document.body.style.backgroundColor = colors[index];
    btnStartRef.setAttribute("disabled", "disabled");
  }, 1000);
};

btnStartRef.addEventListener("click", colorSwitch);

btnStopRef.addEventListener("click", () => {
  clearInterval(timerId);
  btnStartRef.removeAttribute("disabled");
});
