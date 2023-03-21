'use strict';

const weatherMap = new Map([
    ['London', 10],
    ['Moscow', 7],
    ['Paris', 14],
]);

for (const [key, value] of weatherMap) {
    console.log(key, value);
}

console.log([...weatherMap]);
console.log([...weatherMap.keys()]);
console.log([...weatherMap.values()]);
