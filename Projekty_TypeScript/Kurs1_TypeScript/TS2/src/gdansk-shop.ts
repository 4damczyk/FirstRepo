import { Shop } from "./shop";

export class GdanskShop extends Shop{
constructor(open: boolean, public leader: string){
    super(open);
    }
    addAddress(address: string): void {
    console.log(address);
    }
    addOwner(owner: string): void {
    console.log(owner);
    }
}