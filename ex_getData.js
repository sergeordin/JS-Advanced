'use strict';

function getData(url, errorMessage) {
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(`${errorMessage} ${response.status}`);
        }
        return response.json();
    });
}

getData('https://dummyjson.com/products/', 'Cannot get products')
    .then(({ products }) => {
        console.log(products);
        return getData(
            'https://dummyjson.com/products/' + products[0].id,
            'Cannot get product'
        );
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.error('Error' + error));
