'use strict';

console.log(15 / 2);
console.log(15 % 2);
console.log(14 % 2);

const isEven = (n) => n % 2 === 0;
const isOdd = (n) => n % 2 === 1;
function isEvenFunc(n) {
    return n % 2 === 0;
}

console.log(isEven(17));
console.log(isEven(12));
console.log(isOdd(17));
console.log(isOdd(12));
