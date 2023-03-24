'use strict';

/*Написать функцию, которая принимает минимальное и максимальное число и возвращает случайное целое число
между ними включая их */

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

setInterval(() => console.log(getRandom(1, 20)), 1000);
