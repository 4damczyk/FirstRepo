"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GdanskShop = void 0;
const shop_1 = require("./shop");
class GdanskShop extends shop_1.Shop {
    constructor(open, leader) {
        super(open);
        this.leader = leader;
    }
    addAddress(address) {
        console.log(address);
    }
    addOwner(owner) {
        console.log(owner);
    }
}
exports.GdanskShop = GdanskShop;
