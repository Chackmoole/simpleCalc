'use strict'

/*Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными
 a и меньше или равными b и возвращает результат в виде массива.
Функция должна возвращать новый массив и не изменять исходный.*/


const arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => {
    const filtredArr = [];
    arr.map(item => item >= a && item <= b ? filtredArr.push(item) : console.log(item));
    return filtredArr;
}

console.log(filterRange(arr, 1, 4))