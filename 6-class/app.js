'use strict';

/*
    Cоздать класс car у которого есть марка, модель и пробег (все свойства приватные, задаются в конструкторе)
	- Сделать для него возможность менять пробег через get/set
	- Добавить метод info, который выводит в консоль марку, модель и пробег
*/

class Car {
    #mark;
    #model;
    #_km;

    constructor(mark, model, km) {
        this.#mark = mark;
        this.#model = model;
        this.#_km = km;
    }

    get km() {
        return this.#_km;
    }

    set km(newKm) {
        return (this.#_km = newKm);
    }

    info() {
        console.log(
            `Your car is ${this.#mark} ${this.#model}, range: ${this.km}`
        );
    }
}

const car = new Car('VW', 'POLO', 250000);
console.log(car);
car.info();
car.km = 100000;
console.log(car);
