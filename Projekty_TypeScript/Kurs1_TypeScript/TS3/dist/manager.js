"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
class Manager {
    constructor() {
        this.users = [];
    }
    AddUser(user) {
        this.users.push(user);
    }
    ShowUser() {
        this.users.forEach((user, index) => {
            console.log('User: ', index, ' ', user);
        });
    }
    addID() {
        return this.users.map((v, index) => {
            return Object.assign(Object.assign({}, v), { id: index });
        });
    }
    FindUser(text) {
        console.log(this.users.find(v => v.name === text));
    }
}
exports.Manager = Manager;
