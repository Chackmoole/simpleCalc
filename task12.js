'use strict'
/*Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.*/

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

const unique = (arr) => {
 const result = [];
 const tempArr = arr.slice();
    for (let tempArrElement of tempArr) {
        if (!result.includes(tempArrElement)) {
            result.push(tempArrElement)
        }
    }
 return result;
}

alert( unique(strings) ); // кришна, харе, :-O
