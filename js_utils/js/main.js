import { randomNumber } from './utils/numbers.js';
import { randomColor } from './utils/colors.js';

const p = document.querySelector('p');

setInterval(function () {
    p.style.color = randomColor();
    p.textContent = randomNumber(1000000000000000);
    p.style.textShadow = `0 0 25px ${randomColor()}`;
}, 80);
