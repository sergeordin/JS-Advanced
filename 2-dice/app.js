'use strict';

/*
   Сделать функцию для настольных игр, которая принимает тип dice, который надо бросить:
   d4, d6, d8, d10, d12, d16, d20 и возвращает случайное целое число на этом
   интервале с включенными границами:

   - d6 - возможные значения - 1, 2, 3, 4, 5, 6
*/

function diceGame(dice = 'd6') {
    const diceMax = Number(dice.slice(1));
    if (isNaN(diceMax)) {
        return null;
    }
    let random = Math.floor(Math.random() * (diceMax - 1) + 2);
    return random;
}

console.log(diceGame('d4'));
console.log(diceGame('d6'));
console.log(diceGame('d8'));
console.log(diceGame('d10'));
console.log(diceGame('d12'));
console.log(diceGame('d16'));
console.log(diceGame('d20'));
console.log(diceGame('d190'));
console.log(diceGame('dsdf')); // null
