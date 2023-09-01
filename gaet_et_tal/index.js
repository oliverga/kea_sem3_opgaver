let randomNumber = Math.floor(Math.random() * 101);
let counter = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    counter++;

    if (guess > randomNumber) {
        document.getElementById('feedback').textContent = 'For højt';
    } else if (guess < randomNumber) {
        document.getElementById('feedback').textContent = 'For lavt';
    } else if (isNaN(guess)) {
        document.getElementById('feedback').textContent = 'Du skal jo skrive et tal fo faan';
    }
    else {
        document.getElementById('feedback').textContent = 'Tillykke! Du gættede rigtigt!';
        document.getElementById('feedback').classList.add('win');
    }

    document.getElementById('counter').textContent = 'Antal gæt: ' + counter;
}

function handleKeyDown(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
}