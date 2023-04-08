'use strict'

const arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => {
    const filtredArr = [];
    arr.map(item => item >= a && item <= b ? filtredArr.push(item) : console.log(item));
    return filtredArr;
}

console.log(filterRange(arr, 1, 4))