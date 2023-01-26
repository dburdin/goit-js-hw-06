let counterValue = 0;
let value = document.querySelector("#value");
let decrementButton = document.querySelector("[data-action=decrement]");
let incrementButton = document.querySelector("[data-action=increment]");

decrementButton.addEventListener("click", handleDecrementButtonClick);
incrementButton.addEventListener("click", handleIncrementButtonClick);

function handleDecrementButtonClick() {
  counterValue = value.textContent--;
}
function handleIncrementButtonClick() {
  counterValue = value.textContent++;
}
