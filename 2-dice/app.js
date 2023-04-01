'use strict';

/*
   Сделать функцию для настольных игр, которая принимает тип dice, который надо бросить:
   d4, d6, d8, d10, d12, d16, d20 и возвращает случайное целое число на этом
   интервале с включенными границами:

   - d6 - возможные значения - 1, 2, 3, 4, 5, 6
*/

function diceGame(dice = 'd6') {
    const diceMax = Number(dice.slice(1));
    const min = 1;
    if (isNaN(diceMax) && diceMax <= min) {
        return null;
    }
    return Math.floor(Math.random() * diceMax + min);
}
