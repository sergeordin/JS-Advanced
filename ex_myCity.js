'use strict';

function getMyCoordinates() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                resolve({
                    latitude: coords.latitude,
                    longtitude: coords.longtitude,
                });
            },
            (err) => {
                reject(err);
            }
        );
    });
}

async function getMyCity() {
    try {
        const { latitude, longtitude } = await getMyCoordinates();
        const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longtitude=${longtitude}`
        );
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        console.log(data.city);
    } catch (e) {
        console.error(e);
    }
}

getMyCity();
