'use strict'

/*Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.*/

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

const getAverageAge = (arr) => {
  let sum = 0;
  arr.forEach((item) => sum += item.age)
  return sum / arr.length;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28