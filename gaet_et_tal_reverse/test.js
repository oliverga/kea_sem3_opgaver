function generateUniqueRandomNumbers() {
    let randomNumbers = new Set();
    while(randomNumbers.size < 5) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        randomNumbers.add(randomNumber);
    }
    return Array.from(randomNumbers);
}

for (let i = 0; i < 10; i++) {
    let uniqueRandomNumbers = generateUniqueRandomNumbers();
    console.log(uniqueRandomNumbers);
}