let password;
let isPasswordValid;

do {
    let password = prompt("Введіть пароль:");
    console.log(`Користувач ввів: ${password}`);

    if (password === null) {
        alert("Ви скасували введення пароля!");
        isPasswordValid = false;
    } else if (password.length < 6) {
        alert("Пароль має бути не менше 6 символів!");
        isPasswordValid = false;
    } else if (password.includes(" ")) {
        alert("Пароль не повинен містити пробіли!");
        isPasswordValid = false;
    } else {
        isPasswordValid = true;
    }

} while (!isPasswordValid);

alert("Пароль прийнято!");