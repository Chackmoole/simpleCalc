'use strict'
/*
Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

Например:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);


 после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}

Такая функция очень удобна при работе с данными, которые приходят с сервера.

    В этой задаче мы предполагаем, что id уникален. Не может быть двух элементов массива с одинаковым id.

    Используйте метод .reduce в решении.
*/

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

// console.log(users[0].id)
const groupById = (arr) => {
    // let result = arr.reduce(
    //     function (accumulator, item){
    //         // console.log('item: ', item)
    //         accumulator['item'] = item.id;
    //         // console.log('accumulator: ', accumulator);
    //         return accumulator;
    //     }, [{}]);

    let result = {};
    // result.o = arr[0].id;

    // через for
    // for(let i = 0; i < arr.length; i += 1){
    //     result[arr[i].id] = arr[i];
    // }

    //через for...in
    // for(let item of arr){
    //     result[item.id] = item;
    // }

    // через reduce

    result = arr.reduce((accum, item) => {
        accum[item.id] = item
        return accum;
    }, {})

    return result;
}

let usersById = groupById(users);

console.log(usersById);