// const categories = document.querySelectorAll(".item");
// console.log("Number of categories:", categories.length);

// const subCategories = categories.forEach((category) => {
//   console.log("Category:", category.firstElementChild.textContent);
//   console.log("Elements:", category.querySelectorAll("li").length);
// });

const categories = document.getElementById("categories");
const subCategories = [...categories.children];

console.log(`Number of categories: ${categories.childElementCount}`);

subCategories.forEach((subCategory) => {
  console.log(`Category: ${subCategory.firstElementChild.textContent}`);
  console.log(`Elements: ${subCategory.lastElementChild.childElementCount}`);
});
