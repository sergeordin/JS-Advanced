'use strict';

class Billing {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
}

class fixBilling extends Billing {
    calculateTotal() {
        return this.amount;
    }
}

class hourBilling extends Billing {
    constructor(amount, hour) {
        super(amount);
        this.hour = hour;
    }
    calculateTotal() {
        return this.amount * this.hour;
    }
}

class itemBilling extends Billing {
    constructor(amount, item) {
        super(amount);
        this.item = item;
    }
    calculateTotal() {
        return this.amount * this.item;
    }
}
