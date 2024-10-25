"use strict";
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 1; i <= numbers.length; i++) {
    sum += i;
}
console.log(sum);
let newNumbers = [...numbers, 6, 7];
console.log("New array with additional elements:", newNumbers);
const person = { name: 'Hamza', age: 20 };
const contactInfo = { email: 'hamza@123' };
const fullInfo = { ...person, ...contactInfo };
console.log('mergeObject is', fullInfo);
