"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function narrowType(value) {
    if (typeof value === "string") {
        return `The string is: ${value}`;
    }
    return `The number is: ${value}`;
}
//truthiness narrowing
function message(msg) {
    if (msg) {
        return `The message is: ${msg}`;
    }
    return "No message provided";
}
//exhaustive checking
function friesorder(order) {
    switch (order) {
        case "small":
            return "You ordered small fries";
        case "medium":
            return "You ordered medium fries";
        case "large":
            return "You ordered large fries";
    }
    return `You ordered ${order} fries`;
}
class Pizza {
    serve() {
        return "Here's your pizza!";
    }
}
class Burger {
    serve() {
        return "Here's your burger!";
    }
}
function serve(food) {
    if (food instanceof Pizza) {
        return food.serve();
    }
    return food.serve();
}
function area(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving a ${item.type} with ${item.sugar} spoons of sugar.`;
    }
    return `Serving a ${item} chai.`;
}
function serveChai(chai) {
    switch (chai.type) {
        case "masala":
            return `Serving a masala chai with spice level ${chai.spiceLevel}.`;
        case "ginger":
            return `Serving a ginger chai with ${chai.amount} grams of ginger.`;
        case "elaichi":
            return `Serving an elaichi chai with aroma level ${chai.aroma}.`;
    }
}
function brew(order) {
    if ("spiceLevel" in order) {
        return `Brewing a masala chai with spice level ${order.spiceLevel}.`;
    }
    if ("amount" in order) {
        return `Brewing a ginger chai with ${order.amount} grams of ginger.`;
    }
    return `Brewing an elaichi chai with aroma level ${order.aroma}.`;
}
function isStringArray(value) {
    return Array.isArray(value) && value.every(item => typeof item === "string");
}
//# sourceMappingURL=typenarrowing.js.map