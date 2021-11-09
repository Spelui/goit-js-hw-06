const iputRef = document.querySelector("#validation-input");

iputRef.addEventListener("blur", () => {
  iputRef.classList.add("invalid");
  if (iputRef.value.length >= iputRef.dataset.length) {
    iputRef.classList.remove("invalid");
    iputRef.classList.add("valid");
  }
});
