export abstract class Shop{
    constructor(open: boolean){

    }

    abstract addAddress(name: string): void;
    abstract addOwner(name: string): void;
}