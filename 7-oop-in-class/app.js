'use strict';

/*
	Создать базовый класс Персонажа с параметрами: раса, имя, язык и метод - говорить
	Создать класс орка, который наследуется от Персонажа, у которого есть оружие и метод - удар
	Создать класс эльфа, который наследуется от Персонажа, у которого есть тип заклинаний и метод - создать заклинание

	Использовать прототипное наследование. Все методы просто выводят что то в консоль
*/

class Character {
    race;
    name;
    lang;
    constructor(race, name, lang) {
        this.race = race;
        this.name = name;
        this.lang = lang;
    }

    speak() {
        console.log(`HEY!`);
    }
}

class Ork extends Character {
    weapon;
    constructor(race, name, lang, weapon) {
        super(race, name, lang);
        this.weapon = weapon;
    }
    speak() {
        console.log(`I am ${this.race}! My name is ${this.name}`);
    }
    hit() {
        console.log(`Fill my ${this.weapon}! HIT!`);
    }
}

class Elf extends Character {
    spell;
    constructor(race, name, lang, spell) {
        super(race, name, lang);
        this.spell = spell;
    }
    speak() {
        console.log(
            `I am ${this.race}! My name is ${this.name} and I have spell ${this.spell}`
        );
    }

    cast() {
        console.log(`Fill my ${this.spell}! CAST!`);
    }
}

const ork = new Ork('ork', 'Zumba', 'or-OR', 'topor');
const elf = new Elf('elf', 'Lissy', 'el-EL', 'zagovor');
ork.speak();
ork.hit();
elf.speak();
elf.cast();
