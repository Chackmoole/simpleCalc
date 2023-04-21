/*
 * Описание задачи: Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.
 * Ожидаемый результат: true если это объект, false в противном случае. ({ a: 1 }) => true, ([1, 2, 3]) => false
 * Сложность задачи: 1 of 5
 * @param element - элемент для проверки
 * @returns {boolean}
 */

const isPlainObject = (param) => typeof param === "object" && !Array.isArray(param) && param !== null;

console.log(isPlainObject({ a: 1 }))
console.log(isPlainObject([1, 2, 3]))
console.log(isPlainObject())