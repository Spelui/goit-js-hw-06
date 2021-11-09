const counterValue = document.querySelector("#value");

const counterDecrement = document.querySelector("[data-action='decrement']");

const counterIncrement = document.querySelector("[data-action='increment']");

counterDecrement.addEventListener("click", () => {
  const value = Number(counterValue.textContent) - 1;
  counterValue.textContent = `${value}`;
});

counterIncrement.addEventListener("click", () => {
  const value = Number(counterValue.textContent) + 1;
  counterValue.textContent = `${value}`;
});
