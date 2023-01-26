let input = document.getElementById("validation-input");
let dataLength = Number(input.dataset.length);
console.log("dataLength", dataLength);
let value;
input.addEventListener("blur", onInputBlur);

function onInputBlur(e) {
  if (e.currentTarget.value.length === dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
