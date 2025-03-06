let num1, num2, operation;
let isValidInput;

do {
    num1 = prompt("Введіть перше число:");
    num2 = prompt("Введіть друге число:");
    operation = prompt("Введіть математичну операцію (+, -, *, /):");

    console.log(`Користувач ввів: ${num1}, ${num2}, операція: ${operation}`);

    if (num1 === null || num2 === null || operation === null) {
        alert("Ви скасували введення!");
        isValidInput = false;
    } else if (isNaN(num1) || isNaN(num2)) {
        alert("Будь ласка, введіть коректні числа!");
        isValidInput = false;
    } else if (!["+", "-", "*", "/"].includes(operation)) {
        alert("Будь ласка, введіть коректну операцію (+, -, *, /)!");
        isValidInput = false;
    } else {
        isValidInput = true;
    }

} while (!isValidInput);

num1 = Number(num1);
num2 = Number(num2);
let result;

switch (operation) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if (num2 === 0) {
            alert("Ділення на нуль неможливе!");
            result = "Помилка";
        } else {
            result = num1 / num2;
        }
        break;
}

alert(`Результат: ${result}`);

