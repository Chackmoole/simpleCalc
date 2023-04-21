'use strict'
/*
 * Описание задачи: Напишите функцию, которая возвращает вложенный массив вида `[[key, value], [key, value]]`.
 * Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
 * Сложность задачи: 1 of 5
 * @param {Object} object - любой объект для трансформации
 * @returns {Array} - вложенный массив
 */

const makePairs = (object) => {
    const result = [];
    for(let key in object){
      result.push([key, object[key]])
    }
    return result
};

const data = { a: 1, b: 2 };

console.log(makePairs(data)); // [['a', 1], ['b', 2]]