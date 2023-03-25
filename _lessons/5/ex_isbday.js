'use strict';

/*
   Сделать функцию, которая принимает пользователя и проверяет, 
   есть ли у него сегодня день рождения или нет
*/

const user = {
    name: 'Vasya',
    birthday: '03/25/2023',
};

function isBiday(user) {
    const now = new Date();
    const date = new Date(user.birthday);
    if (date.getMonth() !== now.getMonth()) {
        return false;
    }
    if (date.getDay() !== now.getDay()) {
        return false;
    }
    return true;
}

console.log(isBiday(user));
