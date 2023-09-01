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
    for (let i = 0; i < curseWords.length; i++) {
        newString = newString.replace(curseWords[i].bad, curseWords[i].good);
    }
    return newString;
}

console.log(profanityFilter("Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning."));