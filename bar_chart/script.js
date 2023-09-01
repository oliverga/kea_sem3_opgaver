const list = document.querySelector("ul");

// Genererer et tilfældigt tal mellem 0 og max
function randomNum(max) {
    return Math.floor(Math.random() * max);
}

// Opretter et element med en højde num og returner det
function createQueue(num) {
    const li = document.createElement("li");
    li.style.setProperty("--height", num);
    return li;
}

// Init array med 20 tilfældige tal mellem 0 og 100
let queueHistory = Array.from({length: 20}, () => randomNum(100));
console.log(queueHistory);

// Opret et element for hvert tal i arrayet og tilføj det til ul listen
queueHistory.forEach(num => {
    list.appendChild(createQueue(num));
});

// Hvert sekund fjernes det første element i arrayet og et nyt tilfældigt tal tilføjes
setInterval(() => {
    queueHistory.shift();
    const newNum = randomNum(100);
    queueHistory.push(newNum);
    list.appendChild(createQueue(newNum));
    list.removeChild(list.firstElementChild);
    console.log(queueHistory);
}, 1000);