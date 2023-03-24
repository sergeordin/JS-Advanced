'use strict';

console.log(10 === 10.0);

console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);

console.log(Number('10'));
console.log(+'20');

console.log(Number.parseInt('11', 10));
console.log(Number.parseInt('11 sec', 10));
console.log(Number.parseInt('sec 11', 10));

console.log(Number.parseFloat('11.5', 10));
console.log(Number.parseFloat('11.5 sec', 10));
console.log(Number.parseFloat('sec 11.5', 10));

console.log(Number.isNaN(Number('10sdgfdsf')));
console.log(Number.isNaN(Number(10 / 0)));

console.log(Number.isFinite(Number(10 / 0)));
console.log(Number.isFinite(Number('10sdgfdsf')));
console.log(Number.isFinite(Number(10)));

console.log(Number.isInteger(Number(10)));
console.log(Number.isInteger(Number(10.4)));
