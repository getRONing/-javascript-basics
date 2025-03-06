let randomNumber = Math.floor(Math.random() * 101);
let userNumber;
let attempts = 0;

do {
    userNumber =  Number(prompt("назви число від 0 до 100"));
    attempts++;


    if (isNaN(userNumber)) {
        alert("Ведіть число ;)");
    } else if(userNumber <randomNumber) {
        alert("ваше число менше")
    } else if(userNumber > randomNumber) {
        alert("ваше число більше");
    } else {
        alert(`Вітаємо! Ви вгадали число ${randomNumber} 🎉`);
    }
} while (userNumber !== randomNumber);