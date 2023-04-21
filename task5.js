'use strict'

/* У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.*/

const arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr) => arr.slice().sort();

const sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)