import { data } from "autoprefixer";
import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const glassCounter = document.querySelector(".glass__counter--js");
const buttonAdd = document.querySelector(".button__add--js");
const buttonRemove = document.querySelector(".button__remove--js");
const key = new Date().toISOString().slice(0, 10);
let water = document.querySelector('.water--js');

// local storage 

let currentGlassCounter = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
  currentGlassCounter = localStorageValue;
} else {
  localStorage.setItem(key, 0);
}

glassCounter.innerHTML = currentGlassCounter;

if (currentGlassCounter > 0) {
  water.style.setProperty('display', 'block');
}

// add button

buttonAdd.addEventListener("click", () => {
  currentGlassCounter++;
  glassCounter.innerHTML = currentGlassCounter;
  localStorage.setItem(key, currentGlassCounter);
});

//adding animated water svg path - from https://css-tricks.com/restart-css-animation/

if (currentGlassCounter > 0) {
  let water = document.querySelector(".water--js");
  water.classList.remove("water-remove");
  water.classList.remove("water-disappear");
  water.classList.add("water-fill");
  let newone = water.cloneNode(true);
  water.parentNode.replaceChild(newone, water);

}


let removeClass = true; // animation when page is loaded
const changeButton = document.querySelector(".button__add--js");

changeButton.addEventListener("click", () => {
  if (removeClass) {
    const newAddButton = document.querySelector(".button__add--js");
    newAddButton.classList.remove("button__add--js");
    removeClass = false;
  }
});

// remove button

buttonRemove.addEventListener("click", () => {
  if (currentGlassCounter > 0) {
    currentGlassCounter--;
    localStorage.setItem(key, currentGlassCounter);
  }
  glassCounter.innerHTML = currentGlassCounter;
});




