import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

const glassCounter = document.querySelector('.glass__counter--js');
const buttonAdd = document.querySelector('.button__add--js');
const buttonRemove = document.querySelector('.button__remove--js');
const key = new date().toISOString().slice(0, 10);

let currentGlassCounter = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
    currentGlassCounter = localStorageValue;
} else {
    localStorage.setItem(key, 0);
}



buttonAdd.addEventListener('click', () => {
    currentGlassCounter++;
    glassCounter.innerHTML = currentGlassCounter;
})

buttonRemove.addEventListener('click', () => {
    if (currentGlassCounter > 0) {
        currentGlassCounter--;   
    }
    glassCounter.innerHTML = currentGlassCounter;
})
