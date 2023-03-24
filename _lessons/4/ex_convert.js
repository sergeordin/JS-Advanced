'use strict';

/*
    Напишите функцию, которая принимает 3 параметра:
    - Сумма
    - Валюта исходная
    - Валюта для конвертации

    И возвращает строку уже сконвертированной суммы с постфиксом валюты
    Если не смог - null
    Для примера 3 валюты
*/

function convert(sum, initialCurrency, convertCurrency) {
    const allCurencies = [
        { name: 'USD', mult: 1 },
        { name: 'RUB', mult: 1 / 60 },
        { name: 'EUR', mult: 1.1 },
    ];
    const initial = allCurencies.find((c) => c.name === initialCurrency);
    if (!initial) {
        return null;
    }
    const convert = allCurencies.find((c) => c.name === convertCurrency);
    if (!convert) {
        return null;
    }
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: convert.name,
    }).format((sum * initial.mult) / convert.mult);
}

console.log(convert(100, 'RUB', 'USD'));
console.log(convert(100, 'RUB', 'EUR'));
console.log(convert(100, 'USD', 'RUB'));
console.log(convert(100, 'USD', 'EUR'));
