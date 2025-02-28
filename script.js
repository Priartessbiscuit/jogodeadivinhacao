const prompt = require('prompt-sync')();

const randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = 0;

console.log("Tente adivinhar um número entre 1 e 10:");

while (userGuess !== randomNumber) {
    userGuess = parseInt(prompt("Digite seu palpite: "), 10);

    if (userGuess === randomNumber) {
        console.log("Parabéns! Você acertou!");
    } else if (userGuess > randomNumber) {
        console.log("Tente um número menor.");
    } else {
        console.log("Tente um número maior.");
    }
}
