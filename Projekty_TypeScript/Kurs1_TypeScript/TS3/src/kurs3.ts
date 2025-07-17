import { UserInterface } from "./interface";
import { Manager } from "./manager";

const member = new Manager();

const user1: UserInterface ={
    name: "Jan",
    surname: "Kowalski",
    login: "KowalskiLog"
}
const user2: UserInterface ={
    name: "Jakub",
    surname: "Nowak",
    login: "NowakLog"
}
const user3: UserInterface ={
    name: "Janina",
    surname: "Stasiak",
    login: "StasiakLog"
}

member.AddUser(user1);
member.AddUser(user2);
member.AddUser(user3);
member.ShowUser();
console.log(member.addID());

member.FindUser('Jakub');