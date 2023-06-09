'use strict'

/*Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов.*/
const arr = [1, 2, 3];

const getRandomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const createIndexArray = (arr) => {
    let result = [];
    while (result.length < arr.length) {
      let randomNum = getRandomInteger(0, arr.length - 1);
      if(!result.includes(randomNum)){
          result.push(randomNum)
      }
  }
    return result
}

//создаем массив слуачйных индексов на основе массива, мапимся по нему и возвращаем на его основе перемешанный массив
const shuffle = (arr) => createIndexArray(arr).map((item) => arr[item]);


console.log(shuffle(arr));