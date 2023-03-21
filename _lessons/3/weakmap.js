'use strict';

let a = { a: 1 };
let b = { b: 2 };
const map = new WeakMap();
map.set(a, 'testA');
map.set(b, 'testB');
console.log(map.get(a));
console.log(map.has(a));
console.log(map);

a = null;
setTimeout(() => {
    console.log(map);
});

let cache = new WeakMap();

function getValue(obj) {
    if (!cache.has(obj)) {
        const res = 1; //Сложные вычисления
        cache.set(obj, res);
    }
    return cache.get(obj);
}

const res = getValue(b);
console.log(res);
