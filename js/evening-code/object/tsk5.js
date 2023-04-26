'use strict'
/*
 * Описание задачи: Напишите функцию, которая поверхностно сравнивает два объекта.
 * Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * Сложность задачи: 2 of 5
 * @param {object<string | number>} firstObj - объект с примитивами
 * @param {object<string | number>} secondObj - объект с примитивами
 * @returns {boolean}
 */

const isEqual = (firstObject, secondObject) => {
    if(Object.keys(firstObject).length !== Object.keys(secondObject).length) {
        return false;
    }
    for (const firstObjectKey in firstObject) {
        for (const secondObjectKey in secondObject) {
            if (firstObject[firstObjectKey] !== secondObject[secondObjectKey]) {
                return false
            }
        }
    }
    return true;
}

const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
const data4 = { a: 1, b: 1, c: 3 };

console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false
console.log(isEqual(data, data4)); // false
