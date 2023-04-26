'use strict'

/*
 * Описание задачи: Напишите функцию, которая вызывает метод массива на заданный путь объекта.
 * Ожидаемый результат: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
 * Сложность задачи: 3 of 5
 * @param {Object} object
 * @param {String} path - путь в объекте
 * @param {String} func - метод массива для исполнения
 * @param {Array} [args] - список аргументов
 * @returns {?}
 */

//к методу массива с параметрами вернуться после изучения прототипа

const data = { a: { b: [1, 2, 3] } }

const invoke = (object, path, func) => {
    let splittedPath = path.split('.') // ['a', 'b']
    let result = {...object} // object
    let i = 0;

    while (i <= splittedPath.length) {
        let piecePath = splittedPath.shift()
        result = result[piecePath]
      i++
    }

    return result
};
// console.log(invoke(data, 'a.b', 'splice', [1, 2])); // [2, 3]

console.log( 'итоговый результат функции: ', invoke(data, 'a.b'))