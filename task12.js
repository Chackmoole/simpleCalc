'use strict'
/*Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.*/

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

const unique = (arr) => {
 const result = [];
 const tempArr = arr.slice();

 for(let i = 0; i < arr.length; i += 1) {
     if (!result.includes(tempArr[i])) {
         result.push(tempArr[i])
     }
 }
 return result;
}

alert( unique(strings) ); // кришна, харе, :-O
