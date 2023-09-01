import { randomNumber } from './numbers.js';

export function randomColor () {
    return 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';
}