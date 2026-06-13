"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeChai(order) {
    console.log(order);
}
function serveChai(order) {
    console.log(order);
}
class MasalaChai {
    water = 100;
    milk = 50;
}
class Chai {
    size = "large";
}
function orderChai(t) {
    console.log(t);
}
//call functions
makeChai({ type: "masala", sugar: 2, strong: true });
serveChai({ type: "ginger", sugar: 1, strong: false });
const myChai = new MasalaChai();
const myCup = new Chai();
orderChai("lemon");
//# sourceMappingURL=interfaces.js.map