function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsRef = document.querySelector("#controls");

const input = controlsRef.querySelector("input");
const create = controlsRef.querySelector("[data-create]");
const destroy = controlsRef.querySelector("[data-destroy]");
