class Shop {
    static numberShop = 0;
    numberShop: number;
    public productName: string;
    protected nameShop = 'Stoisko1';
    readonly nameReadOnly = 'nazwa stala';
    price: number;
    private _isHidden: boolean;
    usersName: string[] = ['Igor', 'Jan', 'Tomek'];
    numberTab: number[] = [8, 12, 11, 1];

    constructor(name: string, price: number) {
        this.numberShop = Shop.numberShop++;
        console.log('wartosc', this.numberShop);
        this.productName = name;
        this.price = price;
        this._isHidden = false;
    }

    get isHidden(){
        return this._isHidden;
    }

    set isHidden(newHidden: boolean) {
        this._isHidden = newHidden;
    }
}

class Shop2 extends Shop {

    showName(): string {
        this.nameShop = 'Nowa nazwa sklepu';
        console.log(this.nameShop);
        return this.nameShop;
    }
    
    showInfo(text: string): void{
        console.log(text, this.nameReadOnly);
    }
}

const myShop = new Shop('Jajka', 10)
//console.log(myShop.nameShop);

const myShop2 = new Shop2('Woda', 5);
myShop2.showName();
myShop.nameReadOnly;
myShop2.showInfo('Czesc!');

myShop.isHidden;
console.log(myShop.isHidden);

myShop.isHidden = true;
console.log(myShop.isHidden);
