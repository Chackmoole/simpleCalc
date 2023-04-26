'use strict'

/*
 * Описание задачи: Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
 * @param {object<string | number>} firstObj - объект с примитивными значениями
 * @param {object<string | number>} secondObj - объект с примитивными значениями
 * @returns {object}
 */

const intersection = (firstObject, secondObject) => {
    const result = {};
    for (const firstObjectKey in firstObject) {
        for (const secondObjectKey in secondObject) {
            if( (firstObjectKey === secondObjectKey) && (secondObject[secondObjectKey] === firstObject[firstObjectKey])){
                result[firstObjectKey] = firstObject[firstObjectKey]
            }
        }
    }
    return result;
};

const data = { a: 1, b: 2 };
const data2 = { b: 2, c: 1 };
console.log(intersection(data, data2)); // { b: 2 }