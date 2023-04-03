'use strict'
const calc = (operation) => {
    let result;
    switch (operation) {
        case 'plus' :
            const plus = (firstNumber, secondNumber) => {
                result = firstNumber + secondNumber;
                console.log(result);
                return result
            }
            return plus;

        case 'minus' :
            const minus = (firstNumber, secondNumber) => {
                result = firstNumber - secondNumber
                console.log(result);
                return result
            }
            return minus;

        case 'multiply' :
            const multiply = (firstNumber, secondNumber) => {
                result = firstNumber * secondNumber
                console.log(result);
                return result
            }
            return multiply;

        case 'divide' :
            const divide = (firstNumber, secondNumber) => {
                result = firstNumber / secondNumber
                console.log(result);
                return result
            }
            return divide;
    }
}

calc('plus')(80, 2);
calc('minus')(80, 2);
calc('multiply')(80, 2);
calc('divide')(80, 2)
