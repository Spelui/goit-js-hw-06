const formRef = document.querySelector(".login-form");

const handleFormSubmit = (e) => {
  e.preventDefault();
  const { email, password } = formRef.elements;
  if (email.value === "" || password.value === "") {
    return alert("все поля должны быть заполнены");
  }
  const inf = {
    email: email.value,
    password: password.value,
  };

  console.log(inf);
  formRef.reset();
};

formRef.addEventListener("submit", handleFormSubmit);
