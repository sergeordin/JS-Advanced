'use strict';

/*
   Сделать функцию валидации возраста  На вход передается строка даты рождения пользователя
   вида "2022-01-01".
   Необходимо вывести true, если ему больше 14 лет и false, если меньше
*/

const dateStr1 = '1995-04-03';
const dateStr2 = '2008-04-03';

function checkAge(str) {
    const today = new Date();
    const birthday = new Date(str);
    let age = today.getFullYear() - birthday.getFullYear();
    if (
        today.getMonth() < birthday.getMonth() ||
        (today.getMonth() == birthday.getMonth() &&
            today.getDate() < birthday.getDate())
    ) {
        age--;
    }
    return age >= 14;
}
