'use strict';

function getData(url, errorMessage) {
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(`${errorMessage} ${response.status}`);
        }
        return response.json();
    });
}

getData('https://pokeapi.co/api/v2/pokemon/ditto/', 'Cannot get pokemon')
    .then((data) => {
        const url = data.abilities[0].ability.url;
        return getData(url, 'Cannot get product');
    })
    .then((data) => {
        const res = data.effect_entries.find(
            (i) => i.language.name === 'en'
        ).effect;
        console.log(res);
        return res;
    })
    .catch((error) => console.error('Error' + error));
