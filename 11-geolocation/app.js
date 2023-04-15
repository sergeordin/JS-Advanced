'use strict';

function getPosition() {
    return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
    );
}

getPosition()
    .then((position) => {
        console.log(position);
    })
    .catch((err) => {
        console.error(new Error(err.message));
    });
