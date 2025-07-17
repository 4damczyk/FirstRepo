import {UserInterface} from "./interface";

export class Manager{
    users: UserInterface[] = [];
    constructor(){

    }
    AddUser(user: UserInterface): void {
        this.users.push(user);
    }

    ShowUser(): void {
        this.users.forEach((user, index) => {
            console.log('User: ', index, ' ', user)
        })
    }
    addID(): UserInterface[]{
        return this.users.map((v, index) => {
            return {
                ...v,
                id: index
            }
        });
    }

    FindUser(text: string): void{
        console.log(this.users.find(v => v.name === text))
    }
}
