let email;
let isValidEmail;

do {
    email = prompt("Введіть ваш email:");

    console.log(`Користувач ввів: ${email}`);

    if (email === null) {
        alert("Ви скасували введення!");
        isValidEmail = false;
    } else if (!email.includes("@")) {
        alert("Email повинен містити '@'!");
        isValidEmail = false;
    } else if (email.indexOf("@") !== email.lastIndexOf("@")) {
        alert("Email повинен містити тільки один символ '@'!");
        isValidEmail = false;
    } else if (email.startsWith("@")) {
        alert("Email не може починатися з '@'!");
        isValidEmail = false;
    } else if (!isNaN(email[0])) {
        alert("Email не може починатися з цифри!");
        isValidEmail = false;
    } else {
        let atIndex = email.indexOf("@");
        let dotIndex = email.lastIndexOf(".");

        if (dotIndex > atIndex + 1) {
            isValidEmail = true;
        } else {
            alert("Після '@' має бути хоча б один символ перед '.'!");
            isValidEmail = false;
        }
    }

} while (!isValidEmail);

alert(`Ваш email '${email}' коректний`);




