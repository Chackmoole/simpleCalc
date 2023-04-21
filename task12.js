'use strict'
/*Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.*/

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

const unique = (arr) => {
 const result = [];
 for (let tempArrElement of arr) {
     if (!result.includes(tempArrElement)) {
         result.push(tempArrElement)
     }
 }
 return result;
}

alert( unique(strings) ); // кришна, харе, :-O