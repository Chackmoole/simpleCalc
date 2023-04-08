'use strict'

/*
  Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
  Функция должна изменять принимаемый массив и ничего не возвращать.*/

const arr = [5, 3, 8, 1]

const filterRangeInPlace = (arr, a, b) => {
    for(let i = 0; i < arr.length; i += 1) {
        if(arr[i] < a || arr[i] > b){
            arr.splice(i, 1);
            i -= 1;
        }
    }

}

filterRangeInPlace(arr, 1, 4)

console.log(arr)