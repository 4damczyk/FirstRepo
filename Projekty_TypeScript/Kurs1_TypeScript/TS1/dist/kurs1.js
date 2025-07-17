"use strict";
class Shop {
    constructor(name, price) {
        this.nameShop = 'Stoisko1';
        this.nameReadOnly = 'nazwa stala';
        this.usersName = ['Igor', 'Jan', 'Tomek'];
        this.numberTab = [8, 12, 11, 1];
        this.numberShop = Shop.numberShop++;
        console.log('wartosc', this.numberShop);
        this.productName = name;
        this.price = price;
        this._isHidden = false;
    }
    get isHidden() {
        return this._isHidden;
    }
    set isHidden(newHidden) {
        this._isHidden = newHidden;
    }
}
Shop.numberShop = 0;
class Shop2 extends Shop {
    showName() {
        this.nameShop = 'Nowa nazwa sklepu';
        console.log(this.nameShop);
        return this.nameShop;
    }
    showInfo(text) {
        console.log(text, this.nameReadOnly);
    }
}
const myShop = new Shop('Jajka', 10);
//console.log(myShop.nameShop);
const myShop2 = new Shop2('Woda', 5);
myShop2.showName();
myShop.nameReadOnly;
myShop2.showInfo('Czesc!');
myShop.isHidden;
console.log(myShop.isHidden);
myShop.isHidden = true;
console.log(myShop.isHidden);
