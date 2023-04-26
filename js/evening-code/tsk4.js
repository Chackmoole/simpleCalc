'use strict'
/*
 * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
 * Ожидаемый результат: ({}) => true,
 ({ a: undefined }) => true,
 ({ a: 1 }) => false
 * Пустые значения: '', null, NaN, undefined
 * Сложность задачи: 2 of 5
 * @param {Object} object - объект с примитивами
 * @returns {boolean}
 */

const isEmpty = (object) => {
   for (let key in object){
       if(Boolean(object[key]) ){
          return false
       }
   }
    return true
};

const data = { a: 1, b: undefined };
const data2 = { a: undefined };
console.log(isEmpty(data), 'false'); // false
console.log(isEmpty(data2), 'true'); // true