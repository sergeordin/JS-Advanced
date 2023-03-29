'use strict';

/*
	Создать базовый класс Персонажа с параметрами: раса, имя, язык и метод - говорить
	Создать класс орка, который наследуется от Персонажа, у которого есть оружие и метод - удар
	Создать класс эльфа, который наследуется от Персонажа, у которого есть тип заклинаний и метод - создать заклинание

	Использовать прототипное наследование. Все методы просто выводят что то в консоль
*/

const Character = function (race, name, lang) {
    this.race = race;
    this.name = name;
    this.lang = lang;
};

Character.prototype.speak = function () {
    console.log(`I am ${this.name}`);
};

const ork = new Character('ork', 'Zumba', 'or-OR');
ork.__proto__.weapon = 'topor';
ork.__proto__.hit = function () {
    console.log(`Fill my ${this.weapon}! HIT!`);
};

const elf = new Character('elf', 'Lissy', 'el-EL');
elf.__proto__.spellType = 'Zagovor';
elf.__proto__.spellCast = function () {
    console.log(`Fill my ${this.spellType}! CAST!`);
};

console.log(ork);
ork.speak();
ork.hit();

console.log(elf);
elf.speak();
elf.spellCast();
