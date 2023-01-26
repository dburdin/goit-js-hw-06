function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let refs = {
  button: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
  body: document.querySelector("body"),
};

refs.button.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = refs.body.style.backgroundColor;
}
