// 1.	Скопируйте код объекта и проанализируйте его работу:
let user = {
  name: "Иван",
  age: 38,
};
// Добавим метод для объекта
user.sayHi = function () {
  alert("Привет!");
};

user.sayHi(); // Привет!

// 2.Создайте объект – информация о покупателе (не менее 5 строк) и выведите три из них.

let buyerInfo = {
  name: "Петя",
  email: "petr@mail.com",
  phone: "+7 (976) 333-22-11",
  city: "Париж",
  address: "ул. Елисейские поля, д. 13, кв. 7",
};

 console.log(buyerInfo.name);
 console.log(buyerInfo.phone);
 console.log(buyerInfo.address);

// 3.Создайте объекты пользователи, заказы и рестораны с соответствующими значениями. Организуйте вывод информации из объектов по условию.

// Создаем объекты пользователей
const user1 = {
  id: 1,
  name: "Petr",
  email: "petr@example.com",
  address: "123 Champs Elisee St",
  city: "Paris",
  state: "PA",
  zip: "32111",
};

const user2 = {
  id: 2,
  name: "May",
  email: "may@example.com",
  address: "756 Gavayan St",
  city: "Ganalulu",
  state: "MA",
  zip: "70801",
};

// Создаем объекты заказов
const order1 = {
  id: 1,
  userId: 1,
  restaurant: "Extra Cafe",
  items: ["Salad", "Cofee"],
  total: 12.99,
};

const order2 = {
  id: 2,
  userId: 2,
  restaurant: "Smoothie House",
  items: ["Juice", "Pasta"],
  total: 17.99,
};

const order3 = {
  id: 3,
  userId: 1,
  restaurant: "Extra Cafe",
  items: ["Salmon Sandwich", "Calmar Rings"],
  total: 16.99,
};

// Создаем объекты ресторанов
const restaurant1 = {
  name: "Extra Cafe",
  address: "72 Elf St",
  city: "Paris",
  state: "PA",
  zip: "6002",
};

const restaurant2 = {
  name: "Smoothie House",
  address: "29 Kitchen St",
  city: "Miami",
  state: "MA",
  zip: "70001",
};

// Функция для вывода информации о заказах пользователей в указанном ресторане
function printOrdersInRestaurant(restaurantName) {
  // Фильтруем заказы по ресторану
  const ordersInRestaurant = [order1, order3].filter(
    (order) => order.restaurant === restaurantName
  );

  // Для каждого заказа в ресторане выводим информацию о пользователе и о заказе
  ordersInRestaurant.forEach((order) => {
    const user = [user1, user2].find((user) => user.id === order.userId);
    console.log(
      "User:",
      user.name,
      "| Email:",
      user.email,
      "| Order ID:",
      order.id,
      "| Items:",
      order.items.join(", "),
      "| Total:",
      order.total
    );
  });
}

// Выводим информацию о заказах пользователей в ресторане Burger House
 console.log("Orders in Extra Cafe:");
 printOrdersInRestaurant("Extra Cafe");

// 4.При помощи функции-конструктора и оператора "new" создайте функцию, выводящую имена вашей группы:
function User1(name) {
  this.name = name;
  this.isAdmin = false;
}

let user3 = new User1("Вася");

alert(user3.name); // Вася
alert(user3.isAdmin); // false
// 5.Используя конструктор, создайте объект – студент. Передайте конструктору параметры, определяющие, как создавать объект, и что в него записывать:
function User(name) {
  this.name = name;
  this.sayHi = function () {
    alert("Меня зовут: " + this.name);
  };
}

let petr = new User("Петя");

petr.sayHi(); // Меня зовут: Петя

petr = {
  name: "Петя",
  sayHi: () => User(this.name),
};
