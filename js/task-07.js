const inpRangeRefs = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

inpRangeRefs.addEventListener("input", () => {
  let valueInput = inpRangeRefs.value;
  text.style.fontSize = `${valueInput}px`;
});
