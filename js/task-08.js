let form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Fill all fields!");
  }

  console.log({ Email: email.value, Password: password.value });
  e.currentTarget.reset();
}
