'use strict'

/*Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов.*/
const arr = [1, 2, 3];

const getRandomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const creatIndexArray = (arr) => {
    let result = [];
    while (result.length < arr.length) {
      let randomNum = getRandomInteger(0, arr.length - 1);
      if(!result.includes(randomNum)){
          result.push(randomNum)
      }
  }
    return result
}

const shuffle = (arr) => {
    let result = [];
    const indexArr = creatIndexArray(arr);
    for(let i = 0; i < arr.length; i += 1) {
    result.push({item: arr[i], index : indexArr[i]})
    }
    return result.sort((a,b) => a.index > b.index ? 1 : -1).map((item) => item.item)
}

console.log(shuffle(arr));