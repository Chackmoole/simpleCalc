/*
Переведите текст вида border-left-width в borderLeftWidth

Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

    Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/

//функци для проверки присутствия элемента
const isItemExist = (item) => item !== '';


const camelize = (str) => {
    const tempArr = str.split('-').filter(isItemExist)
    const result = tempArr.map((item, index) => {
    return index >= 1 ? item[0].toUpperCase() + item.slice(1) : item;
    }
);
   return result.join('');
}

console.log(camelize('background-color'));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));