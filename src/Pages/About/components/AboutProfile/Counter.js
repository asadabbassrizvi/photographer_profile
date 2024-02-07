let displayValue = document.querySelectorAll(".counter");
let interval = 5000;

displayValue.forEach((displayValue) => {
  let startValue = 0;
  let endValue = parseInt(displayValue.getAttribute("data-value"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(() => {
    startValue += 1;
    displayValue.textContent = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
});
