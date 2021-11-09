function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector(".change-color");

const spanColorRef = document.querySelector(".color");

btnRef.addEventListener("click", () => {
  spanColorRef.textContent = getRandomHexColor();
  document.querySelector(
    "body"
  ).style.backgroundColor = `${spanColorRef.textContent}`;
});
