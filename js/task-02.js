const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.getElementById("ingredients");

const elements = ingredients.map((ingridient) => {
  let itemEl = document.createElement("li");
  itemEl.textContent = ingridient;
  itemEl.classList.add("item");
  return itemEl;
});

listEl.append(...elements);

// for (let ingredient of ingredients) {
//   itemEl = document.createElement("li");
//   itemEl.textContent = ingredient;
//   itemEl.classList.add("item");
//   liseEl.append(itemEl);
// }
