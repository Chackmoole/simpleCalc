'use strict'

//У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

const vasya = { name: "Вася", age: 25 };
const petya = { name: "Петя", age: 30 };
const masha = { name: "Маша", age: 28 };


const users = [ vasya, petya, masha ];

const names = users.map(item => item.name);

alert( names ); // Вася, Петя, Маша