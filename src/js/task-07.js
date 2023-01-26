let input = document.getElementById("font-size-control");
console.log("input", input);
let span = document.getElementById("text");
console.log("span", span);

input.addEventListener("change", onInputChange);

function onInputChange(e) {
  input.range = e.currentTarget.value;
  span.style.fontSize = `${e.target.value}px`;
}
