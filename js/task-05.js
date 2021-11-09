const refs = {
  inputVal: document.querySelector("#name-input"),
  title: document.querySelector("#name-output"),
};

refs.inputVal.addEventListener("input", () => {
  refs.title.textContent = refs.inputVal.value;

  if (refs.inputVal.value === "") {
    refs.title.textContent = "Anonymous";
    refs.title.textContent;
  }
});
