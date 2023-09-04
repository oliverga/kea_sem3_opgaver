"use strict";

const curseWords = [
  {    
      bad: "var",    
      good: "const",  
  },  
  {    
      bad: "float",    
      good: "grid",  
  },  
  {    
      bad: "marquee",    
      good: "just don't",  
  },
];

function profanityFilter(string) {  
  let newString = string;
  let isUpdated = true;
  for (let i = 0; i < curseWords.length; i++) {
      if (newString.includes(curseWords[i].bad)) {
          newString = newString.replace(curseWords[i].bad, `<span class="good-word">${curseWords[i].good}</span>`);
          isUpdated = false;
      }
  }
  if (isUpdated) {
      let dialog = document.querySelector('#dialog');
      dialog.showModal();
      document.querySelector('#closeButton').addEventListener('click', function() {
          dialog.close();
      });
  }
  return newString;
}

document.querySelector('#updateButton').addEventListener('click', function() {
  document.querySelector('.text').innerHTML = profanityFilter(document.querySelector('.text').textContent);
});
