const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

let listEL = document.querySelector(".gallery");

let elements = images
  .map((img) => {
    return `<li><img src = "${img.url}" alt="${img.alt}", height="300px", width="430px"></li>`;
  })
  .join("");
listEL.insertAdjacentHTML("beforeend", elements);

// for (let img of images) {
//   listEL.insertAdjacentHTML(
//     "beforeend",
//     `<li><img src = "${img.url}" alt="${img.alt}", height="300px"
//       width="430px"></li>`
//   );
// }
