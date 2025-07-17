"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manager_1 = require("./manager");
const member = new manager_1.Manager();
const user1 = {
    name: "Jan",
    surname: "Kowalski",
    login: "KowalskiLog"
};
const user2 = {
    name: "Jakub",
    surname: "Nowak",
    login: "NowakLog"
};
const user3 = {
    name: "Janina",
    surname: "Stasiak",
    login: "StasiakLog"
};
member.AddUser(user1);
member.AddUser(user2);
member.AddUser(user3);
member.ShowUser();
console.log(member.addID());
member.FindUser('Jakub');
