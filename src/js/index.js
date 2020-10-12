import { data } from 'autoprefixer';
import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

const glassCounter = document.querySelector('.glass__counter--js');
const buttonAdd = document.querySelector('.button__add--js');
const buttonRemove = document.querySelector('.button__remove--js');
const key = new Date().toISOString().slice(0, 10);

let currentGlassCounter = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
    currentGlassCounter = localStorageValue;
} else {
    localStorage.setItem(key, 0);
}

glassCounter.innerHTML = currentGlassCounter;


buttonAdd.addEventListener('click', () => {
    currentGlassCounter++;
    glassCounter.innerHTML = currentGlassCounter;
    localStorage.setItem(key, currentGlassCounter);
})

buttonRemove.addEventListener('click', () => {
    if (currentGlassCounter > 0) {
        currentGlassCounter--;
        localStorage.setItem(key, currentGlassCounter);   
    }
    glassCounter.innerHTML = currentGlassCounter;
})

var button = document.getElementById('app__title__animated');
  
function startAnimation() {
    button.classList.toggle('app__title');
}
  
button.addEventListener("click", startAnimation, false)
