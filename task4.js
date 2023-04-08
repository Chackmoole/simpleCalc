'use strict'

// Сортировать в порядке по убыванию

const arr = [5, 2, 1, -10, 8];

const sortToMinimal = (arr) => arr.sort((a,b) => b - a);

console.log(sortToMinimal(arr));