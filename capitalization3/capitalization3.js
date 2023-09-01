"use strict";


// const crayzayWord = word.slice(0, 2).toLowerCase() + word[2].toUpperCase() + word.slice(3).toLowerCase();

// console.log(crayzayWord);

const word = "siGURD hÅkonson dotCom";

const words = word.split(" ");

const capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
const capitalizedWord = capitalizedWords.join(" ");

console.log(capitalizedWord);