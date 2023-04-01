'use strict';

/*
	Создать базовый класс Персонажа с параметрами: раса, имя, язык и метод - говорить
	Создать класс орка, который наследуется от Персонажа, у которого есть оружие и метод - удар
	Создать класс эльфа, который наследуется от Персонажа, у которого есть тип заклинаний и метод - создать заклинание

	Использовать прототипное наследование. Все методы просто выводят что то в консоль
*/

//Char
const Character = function (race, name, lang) {
    this.race = race;
    this.name = name;
    this.lang = lang;
};

Character.prototype.speak = function () {
    console.log(`I am ${this.name}`);
};

//Ork
const Ork = function (race, name, lang, weapon) {
    Character.call(this, race, name, lang);
    this.weapon = weapon;
};

Ork.prototype.hit = function () {
    console.log(`Fill my ${this.weapon}! HIT!`);
};

const ork = new Ork('ork', 'Zumba', 'or-OR', 'topor');

ork.__proto__.speak;
ork.hit();

//Elf
const Elf = function (race, name, lang, spellType) {
    Character.call(this, race, name, lang);
    this.spellType = spellType;
};

Elf.prototype.spellCast = function () {
    console.log(`Fill my ${this.spellType}! CAST!`);
};

const elf = new Elf('elf', 'Lissy', 'el-EL', 'zagovor');

elf.__proto__.speak;
elf.spellCast();
