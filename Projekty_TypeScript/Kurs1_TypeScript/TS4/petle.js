"use strict";
class Petla {
    constructor() {
        this.tabStr1 = [];
        this.tabNum2 = [];
        this.name = 'alek';
        if (typeof this.name === 'string') {
            this.tabStr1.push(this.name);
            console.log('zmienna trafiła do tablicy string ', this.tabStr1);
        }
        else {
            this.tabNum2.push(this.name);
            console.log('zmienna trafiła do tablicy number ', this.tabNum2);
        }
    }
}
const x = new Petla();
