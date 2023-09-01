"use strict";
const texts = {
  de: {
      texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
      ],
  },
  da: {
      texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
      ],
  },
};

const locale = "da";

// Funktion der opdaterer teksterne på siden
function updateTexts(locale) {
    const text = texts[locale].texts;

    text.forEach((element) => {
        document.querySelector(element.location).textContent = element.text;
    });
}

// Når siden loader sættes teksterne til dansk
document.addEventListener("DOMContentLoaded", (event) => {
    updateTexts(locale);
});

// Når der vælges et nyt sprog, opdateres teksterne
document.querySelector("#selectLocale").addEventListener("change", (event) => {
    updateTexts(event.target.value);
});
