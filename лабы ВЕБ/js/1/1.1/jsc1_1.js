// 1. Попросите пользователя ввести любое число и сохраните его в переменную.
let number = prompt("Пожалуйста, введите число:");
console.log("Вы ввели: " + number);

// 2. Создайте калькулятор, который будет выполнять все арифметические операции над любыми введенными пользователем двумя числами.
let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
console.log("Сумма: " + sum);
console.log("Разность: " + difference);
console.log("Произведение: " + product);
console.log("Частное: " + quotient);

// 3. Необходимо попросить пользователя задумать число, умножить его на 2 и добавить 7. Введите полученный результат в диалоговом окне prompt(). Затем выведите пользователю, какое число он задумал.
let numberToGuess = parseFloat(prompt("Задумайте число:"));
let result = (numberToGuess * 2) + 7;
prompt("Ваше задуманное число: " + result);

// 4. С помощью метода prompt() получите сначала имя пользователя, затем год его рождения и сохраните в две переменные. Вычислите возраст пользователя и выведите его в абзаце с помощью document.write() в формате "Антон: 24".
let username = prompt("Введите ваше имя:");
let birthYear = parseInt(prompt("Введите год вашего рождения:"));
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
document.write(username + ": " + age);

// 5. Сохраните калькулятор и отправьте на GitHub в репозиторий Student, используя формат в названии Фамилия(латинскими буквами)_1.
// Файл можно сохранить с именем, например, "Calculator.js"
// Затем загрузите файл на свой репозиторий Student на GitHub.
