'use strict';

class Billing {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
}

class FixBilling extends Billing {
    calculateTotal() {
        return this.amount;
    }
}

class HourBilling extends Billing {
    constructor(amount, hour) {
        super(amount);
        this.hour = hour;
    }
    calculateTotal() {
        return this.amount * this.hour;
    }
}

class ItemBilling extends Billing {
    constructor(amount, item) {
        super(amount);
        this.item = item;
    }
    calculateTotal() {
        return this.amount * this.item;
    }
}
