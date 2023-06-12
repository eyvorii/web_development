// 1.	Воспользовавшись методическим указанием реализуйте Калькулятор в виде стрелочных функций.

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
a = 4;
b = 2;
console.log(add (a, b));
console.log(subtract (a, b));
console.log(multiply (a, b));
console.log(divide (a, b));

// 2.	Используя  Function Expression реализуйте проверку условий тестовых заданий.

const isNumber = function(value) {
  return typeof value === 'number';
}

const isPositive = function(value) {
  return value > 0;
}

const isEven = function(value) {
  return value % 2 === 0;
}
console.log(isNumber (3));
console.log(isPositive (-1));
console.log(isEven (4));

// 3.	Реализуйте в виде стрелочной функции функцию, проверяющую вашу фамилию на полиндром.

const isPalindrome = (string) => {
  const reversedString = string.split('').reverse().join('');
  return string === reversedString;
}
console.log(isPalindrome ('аникина'));

// 4.	Реализуйте в виде стрелочной функции вычисление среднего значения данных в массиве

const calculateAverage = (array) => {
  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum / array.length;
}
myArray = [3, 1, -5, -2, 6, -7, 4, 2, 8, 11, -14];

console.log(calculateAverage (myArray));

// 5.	В виде стрелочной функции реализуйте функцию, вычисляющую количество дней до нового года.

const daysUntilNewYear = () => {
  const today = new Date();
  const newYear = new Date(today.getFullYear() + 1, 0, 1);
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const daysUntil = Math.ceil((newYear - today) / millisecondsPerDay);
  return daysUntil;
}

console.log(daysUntilNewYear());

// 6.	Создайте пустую стрелочную функцию возвращает undefined

const emptyFunc = () => {
  return undefined;
}
console.log(emptyFunc());

// 7.	Создайте массив и напишите стрелочные функции для него: суммирование всех элементов, выявить все четные, умножить каждый элемент на 2. 

const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 21

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10, 12]

// 8.	Создайте массив с e-mail. Организуйте фильтр на странице html по названию почты.

const emails = [
  "irina@example.com",
  "danil@example.com",
  "alexey@example.com",
  "svetlana@example.com"
];

function filterEmails() {
  const input = document.getElementById("filter-input");
  const filter = input.value.toLowerCase();
  const emailList = document.getElementById("email-list");

  // Очистить список e-mail
  emailList.innerHTML = "";

  // Фильтрация e-mail и добавление в список
  emails
    .filter(email => email.toLowerCase().includes(filter))
    .forEach(email => {
      const listItem = document.createElement("li");
      listItem.textContent = email;
      emailList.appendChild(listItem);
    });
}

filterEmails();

