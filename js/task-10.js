function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsRef = document.querySelector("#controls");

const input = controlsRef.querySelector("input");
const create = controlsRef.querySelector("[data-create]");
const destroy = controlsRef.querySelector("[data-destroy]");

const boxes = document.querySelector("#boxes");

create.addEventListener("click", getValue);

destroy.addEventListener("click", clearResult);

function getValue() {
  const value = input.value;
  if (!value) return;
  creatBox(value);
}

function creatBox(value) {
  const result = [];
  let size = 30;
  for (let i = 0; i < value; i += 1) {
    const markup = `<div class="square" style="width:${size}px; height:${size}px; background:${getRandomHexColor()}"></div>`;
    size += 10;
    result.push(markup);
  }
  updateMarkup(result.join(""));
}

function updateMarkup(markup = "") {
  boxes.innerHTML = markup;
}

function clearResult() {
  creatBox(0);
  input.value = "";
}
