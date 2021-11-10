const inputRef = document.querySelector("#validation-input");

const addClass = (itm) => inputRef.classList.add(itm);

const removeClass = (itm) => inputRef.classList.remove(itm);

inputRef.addEventListener("blur", () => {
  addClass("invalid");

  if (+inputRef.value.length === +inputRef.dataset.length) {
    removeClass("invalid");
    addClass("valid");
  }
});
