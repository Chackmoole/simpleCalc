'use strict'
/*
 * Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
 * Сложность задачи: 2 of 5
 * @param {Object} object - любой объект
 * @param {?} args - список значений для удаления
 * @returns {Object} - новый объект без удаленных значений
 */

const without = (object, ...args) => {
    const obj = {...object};
    for(let item of args){
        if (item in obj) {
            delete obj[item]
        }
    }
    return obj
};

const data = { a: 1, b: 2, c: 3 };
console.log(without(data, 'b', 'c')); // { a: 1 }