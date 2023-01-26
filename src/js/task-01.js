const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

const subCategories = categories.forEach((category) => {
  console.log("Category:", category.firstElementChild.textContent);
  console.log("Elements:", category.querySelectorAll("li").length);
});
