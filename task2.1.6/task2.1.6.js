let length;
let isValidInput;

do {
    length = prompt("Введіть довжину пароля:");

    console.log(`Користувач ввів довжину: ${length}`);

    if (length === null) {
        alert("Ви скасували введення!");
        isValidInput = false;
    } else if (isNaN(length) || length < 1) {
        alert("Будь ласка, введіть коректну довжину (число більше 0)!");
        isValidInput = false;
    } else {
        isValidInput = true;
    }

} while (!isValidInput);

length = Number(length);
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let password = "";

for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
}

alert(`Ваш випадковий пароль: ${password}`);


