"use strict";
function Calculator(a, c, b) {
    switch (c) {
        case '+':
            console.log(a + b);
            break;
        case '-':
            console.log(a - b);
            break;
        case '*':
            console.log(a * b);
            break;
        case '/':
            console.log(a / b);
            break;
        case '%':
            console.log(a % b);
            break;
        default:
            console.log('Invalid Input');
    }
}
Calculator(5, '+', 5);
const person = {
    name: 'Hamza',
    email: '84',
    password: 73,
    isactive: true,
    0: 'hamza',
    1: 'talha',
    greet: (greet) => `Hello, ${greet}!`
};
console.log(person);
