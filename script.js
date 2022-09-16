"use strict";

const previous = document.getElementById("previous"),
  next = document.getElementById("next");

const images = [
  { id: "1", url: "./img/chrono.jpg" },
  { id: "2", url: "./img/inuyasha.jpg" },
  { id: "3", url: "./img/ippo.png" },
  { id: "4", url: "./img/tenchi.jpg" },
  { id: "5", url: "./img/tenjhotenge.jpg" },
  { id: "6", url: "./img/yuyuhakusho.jpg" },
];

const containerItems = document.getElementById("container-items");

const loadImagnes = (images, container) => {
  images.forEach((image) => {
    container.innerHTML += `
    <div class='item'>
    <img src='${image.url}'>
    </div>`;
  });
};

loadImagnes(images, containerItems);
let items = document.querySelectorAll(".item");

const previousSlide = () => {
  containerItems.appendChild(items[0]);
  items = document.querySelectorAll(".item");
};

const nextSlide = () => {
  const lastItem = items[items.length - 1];
  containerItems.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll(".item");
};

previous.addEventListener("click", previousSlide);
next.addEventListener("click", nextSlide);
