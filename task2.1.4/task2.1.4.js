let userName;
let isNameConfirmed;

do {
    userName = prompt("Введіть своє ім'я:");
    console.log(`Користувач ввів: ${userName}`);

    if (userName === null || userName.trim() === "") {
        alert("Ви не ввели ім'я!");
        isNameConfirmed = false;
    } else {
        isNameConfirmed = confirm(`Ви ввели своє ім'я правильно? (${userName})`);
    }

} while (!isNameConfirmed);

alert(`Привіт, ${userName}!`);
