import { Task } from './task.js';

export class User {
    constructor(task) {
        this.task = new Task(task.task);
    }
    do() {
        this.task.run();
    }
}
