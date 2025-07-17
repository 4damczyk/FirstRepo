"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GdyniaShop = void 0;
const shop_1 = require("./shop");
class GdyniaShop extends shop_1.Shop {
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
exports.GdyniaShop = GdyniaShop;
