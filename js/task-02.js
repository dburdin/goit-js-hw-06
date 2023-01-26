const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let liseEl = document.getElementById("ingredients");
let itemEl;

for (let ingredient of ingredients) {
  itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  liseEl.append(itemEl);
}
