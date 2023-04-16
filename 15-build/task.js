export class Task {
    constructor(task) {
        this.task = task;
    }
    run() {
        console.log(`Let's do ${this.task}`);
    }
}
