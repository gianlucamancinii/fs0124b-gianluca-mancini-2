
const drawButton = document.getElementById('drawButton');

drawButton.addEventListener('click', () => {
    const randomNumber = generateRandomNumber();
    highlightCell(randomNumber);
    drawnNumbers.add(randomNumber);
});

function generateRandomNumber() {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 76) + 1;
    } while (drawnNumbers.has(randomNumber));
    return randomNumber;
}
function getTombolaNumber() {
    const board = document.getElementById('board');
    const numbersPerRow = 9; // Numero di numeri per riga
    const totalNumbers = 76; // Numero totale di numeri
    let currentNumber = 1;
}
    for(let i= 0 ; i< Math.ceil(totalNumbers / numbersPerRow); i++){
        const row = board.insertRow();
        for (let j = 0; j < numbersPerRow; j++) {
            if (currentNumber <= totalNumbers) {
            const cell = row.insertCell(); 
            cell.textContent = currentNumber; 
            currentNumber++;
            }
        }

    }
