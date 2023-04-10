'use strict';

class Task {
    constructor(task) {
        this.task = task;
    }
    run() {
        console.log(`Let's do ${this.task}`);
    }
}

class User extends Task {
    constructor(task) {
        super(task);
        this.do = function () {
            this.run();
        };
    }
}

const task = new Task('Coding');
const user = new User(task.task);
user.do();
