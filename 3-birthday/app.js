'use strict';

/*
   Сделать функцию валидации возраста  На вход передается строка даты рождения пользователя
   вида "2022-01-01".
   Необходимо вывести true, если ему больше 14 лет и false, если меньше
*/

const dateStr1 = '1995-04-03';
const dateStr2 = '2015-04-03';

function checkAge(str) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const date = new Date(str);
    const birthday = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
    );
    let age = today.getFullYear() - birthday.getFullYear();
    if (today > birthday) {
        age = age - 1;
    }
    return age > 14;
}

console.log(checkAge(dateStr1)); //true
console.log(checkAge(dateStr2)); // false
