const refs = {
  input: document.getElementById("name-input"),
  span: document.getElementById("name-output"),
};
refs.input.addEventListener("input", onInputChange);
function onInputChange(e) {
  if (e.currentTarget.value === "") {
    refs.span.textContent = "Anonymous";
  } else {
    refs.span.textContent = e.currentTarget.value;
  }
}
