'use strict';

class Task {
    constructor(task) {
        this.task = task;
    }
    run() {
        console.log(`Let's do ${this.task}`);
    }
}

class User {
    constructor(task) {
        this.task = task;
    }
    do() {
        this.task.run();
    }
}

const task = new Task('Coding');
const user = new User(task.task);
user.do();
