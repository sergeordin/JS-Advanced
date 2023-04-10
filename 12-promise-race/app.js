'use strict';

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));

const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));

const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

const array = [promise1, promise2, promise3];

function race(arr) {
    if (!arr || arr.length === 0) {
        return Promise.resolve([]);
    }
    return Promise.race(arr).then((data) => console.log(data));
}

race(array);
