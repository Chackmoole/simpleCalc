'use strict'

/**
 * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.
 * Пустые значения: '', null, NaN, undefined, [], {}
 * Ожидаемый результат: ({}) => true,
 ({ a: { b: undefined } }) => true,
 ({ a: { b: [] } }) => true
 * Сложность задачи: 3 of 5
 * @param {Object} object - любой объект
 * @returns {boolean}
 */

const isEmptyDeep = (object) => {
    for (const objectKey in object) {
        if (typeof object[objectKey] === 'object'){
          return isEmptyDeep(object[objectKey])
        }
        if(!(object[objectKey] === '' || object[objectKey] === null || object[objectKey] === undefined ||
            isNaN(object[objectKey]))){
            return false;
        }
    }
    return true
};

const data = { a: { b: undefined } };
const data2 = { a: { b: 1, c: {d: 3} } };
const data3 = { a: 1 };
const data4 = { a: undefined };
console.log(isEmptyDeep(data), 'true'); // true
console.log(isEmptyDeep(data2), 'false'); // false
console.log(isEmptyDeep(data3), 'false'); // false
console.log(isEmptyDeep(data4), 'true'); // true