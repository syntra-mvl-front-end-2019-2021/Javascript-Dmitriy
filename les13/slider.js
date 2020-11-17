// let slideContainer = document.createElement("div");
// slideContainer.classList.add("slider");
let slideContainer = document.getElementById("slider");

let item = document.createElement("div");
item.classList.add("item");
slideContainer.appendChild(item);

let img = document.createElement("img");
img.classList.add("image");
item.appendChild(img);

const imgArray = [
  "IMG_20200919_164524.jpg",

  "IMG_20200922_090328.jpg",
  "IMG_20200913_010441.jpg",
  "IMG_20200918_085021.jpg",

  "IMG_20200923_203232.jpg",
  "IMG_20201001_011102.jpg",
];

let imgIndex = 0;
function slideshowRandom() {
  img.setAttribute("src", imgArray[imgIndex]);
  imgIndex = (imgIndex + 1) % imgArray.length;
}

img = slideshowRandom();

let button = document.createElement("div");
button.classList.add("buttonContainer");
let previous = document.createElement("button");
let next = document.createElement("button");
item.appendChild(button);

button.appendChild(previous);
button.appendChild(next);
previous.classList.add("previous");
next.classList.add("next");
