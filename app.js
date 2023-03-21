'use strict';

//Сделать с помощью Set уникалицию массива объектов

const array = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 3, name: 'Вася' },
];

const res = Array.from(new Set(array.map((n) => n.value)), (n) =>
    array.find((m) => m.value === n)
);

console.log(res);
