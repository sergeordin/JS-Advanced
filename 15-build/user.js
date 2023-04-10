import { Task } from './task.js';

export class User extends Task {
    constructor(task) {
        super(task);
        this.do = function () {
            this.run();
        };
    }
}
