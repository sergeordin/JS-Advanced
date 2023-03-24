'use strict';

/*
   Сделать функцию для настольных игр, которая принимает тип dice, который надо бросить:
   d4, d6, d8, d10, d12, d16, d20 и возвращает случайное целое число на этом
   интервале с включенными границами:

   - d6 - возможные значения - 1, 2, 3, 4, 5, 6
*/

function diceGame(dice) {
    const diceTypes = [
        {
            type: 'd4',
            values: [1, 4],
        },
        {
            type: 'd6',
            values: [1, 6],
        },
        {
            type: 'd8',
            values: [1, 8],
        },
        {
            type: 'd10',
            values: [1, 10],
        },
        {
            type: 'd12',
            values: [1, 12],
        },
        {
            type: 'd16',
            values: [1, 16],
        },
        {
            type: 'd20',
            values: [1, 20],
        },
    ];

    let drop = diceTypes.find((d) => d.type === dice);
    if (!drop) {
        return null;
    }
    let random = Math.floor(
        Math.random() * (drop.values[1] - drop.values[0] + 1) + drop.values[0]
    );
    return random;
}

console.log(diceGame('d4'));
console.log(diceGame('d6'));
console.log(diceGame('d8'));
console.log(diceGame('d10'));
console.log(diceGame('d12'));
console.log(diceGame('d16'));
console.log(diceGame('d20'));
console.log(diceGame('d5')); // null
