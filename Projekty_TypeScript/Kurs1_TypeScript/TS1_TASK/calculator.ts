class Calculator{
    private _name: string;

    constructor(name: string){
        this._name = name;
    }

    get name(){
    return this._name;
    }

    set name(name123: string){
        this._name = name123;
    }

    add(number1: number, number2: number){
        console.log(`${this.name}: Wynik dodawania:`, number1 + number2);
    }
     remove(number1: number, number2: number){
        console.log(`${this.name}: Wynik odejmowania:`, number1 - number2);
    }
     multiply(number1: number, number2: number){
        console.log(`${this.name}: Wynik mnozenia:`, number1 * number2);
    }
     divide(number1: number, number2: number){
        console.log(`${this.name}: Wynik dzielenia:`, number1 / number2);
    }
}

class Phone extends Calculator{
    number1: number;
    number2: number;

    constructor(number1: number, number2: number, namePhone: string) {
        super(namePhone);
        this.number1 = number1;
        this.number2 = number2;
    }
}
    const myPhone = new Phone(6, 3,'Samsung');

    myPhone.add(myPhone.number1, myPhone.number2);
    myPhone.remove(myPhone.number1, myPhone.number2);
    myPhone.multiply(myPhone.number1, myPhone.number2);
    myPhone.divide(myPhone.number1, myPhone.number2);

    console.log(myPhone.name);
    
    myPhone.name = 'Nokia';
    console.log(myPhone.name);
