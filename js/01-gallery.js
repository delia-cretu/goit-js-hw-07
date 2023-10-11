// import { galleryItems } from "./gallery-items.js";
// Change code below this line

// export
const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector("ul");

galleryItems.forEach((galleryItem) => {
  gallery.insertAdjacentHTML(
    "afterbegin",
    "<li class='gallery__item'><a class='gallery__link'><img class='gallery__image'></img></a></li>"
  );

  var galleryImage = gallery.querySelector(".gallery__image");
  galleryImage.alt = galleryItem.description;
  galleryImage.src = galleryItem.preview;
  // galleryImage.data-source = galleryItem.original;

  var galleryLink = gallery.querySelector(".gallery__link");
  galleryLink.href = galleryItem.original;

  // galleryLink.addEventListener("click", (e) => {
  //   e.preventDefault();
  // });
});

// Event listeners

// gallery.addEventListener("click", clickLink);
// function clickLink(e) {
//   if (e.target.className !== "gallery__link") {return;}
//   e.preventDefault();
// }

document.addEventListener("keydown", galleryImageClick);
function galleryImageClick(e) {
  if (e.key === "Escape") {
    console.log("Escape");
  }
}

// Lightbox

import * as basicLightbox from "basiclightbox";

gallery.addEventListener("click", openImageInLightbox);
function openImageInLightbox(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  basicLightbox
    .create(`<img width="1400" height="900" src="${e.target.dataset.source}"/>`)
    .show();
}
