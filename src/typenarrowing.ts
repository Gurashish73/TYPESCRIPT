function narrowType(value: string | number) {
    if (typeof value === "string") {
        return `The string is: ${value}`;
    }
    return `The number is: ${value}`;
}

//truthiness narrowing
function message(msg?: string) {
    if (msg) {
        return `The message is: ${msg}`;
    }
    return "No message provided";
}   

//exhaustive checking
function friesorder(order: "small" | "medium" | "large"| number) {
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

function serve(food: Pizza | Burger) {
    if (food instanceof Pizza) {
        return food.serve();
    }
    return food.serve();
}

type Shape = { kind: "circle"; radius: number } | { kind: "square"; sideLength: number };

function area(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}

type ChaiOrder = { 
    type: string; 
    sugar: number 
}
function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    );
}

function serveOrder (item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving a ${item.type} with ${item.sugar} spoons of sugar.`;
    }
    return `Serving a ${item} chai.`;
}                       

type MasalaChai = {
    type: "masala";
    spiceLevel: number;
}

type GingerChai = {
    type: "ginger";
    amount: number;
}

type ElaichiChai = {
    type: "elaichi";
    aroma: number;
}

type Chai = MasalaChai | GingerChai | ElaichiChai;

function serveChai(chai: Chai) {
    switch (chai.type) {
        case "masala":
            return `Serving a masala chai with spice level ${chai.spiceLevel}.`;
        case "ginger":
            return `Serving a ginger chai with ${chai.amount} grams of ginger.`;
        case "elaichi":
            return `Serving an elaichi chai with aroma level ${chai.aroma}.`;
    } 
}  
function brew(order: MasalaChai | GingerChai | ElaichiChai ) {
    if ("spiceLevel" in order) {
        return `Brewing a masala chai with spice level ${order.spiceLevel}.`;
    }
    if ("amount" in order) {
        return `Brewing a ginger chai with ${order.amount} grams of ginger.`;
    }
    return `Brewing an elaichi chai with aroma level ${order.aroma}.`;
}

function isStringArray(value: unknown): value is string[] {
    return Array.isArray(value) && value.every(item => typeof item === "string");
}   

