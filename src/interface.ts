interface Chai {
    flavor: string
    price: number
    milk?:boolean
}

const masala:Chai = {
    flavor: "Masala",
    price: 30
}

interface Shop {
    readonly id: number
    name: string
}

const s: Shop = {id:1,name:"Gurashish caffe"}
// s.id = 2 (not allowed)

interface DiscountCalculator {
    (price: number): number
}
const apply50: DiscountCalculator = (p) => p*0.5

interface TeaMachine{
    start(): void
    stop():void
}

const machine: TeaMachine = {
    start(){
        console.log("start")
    },
    stop(){
        console.log("stop");
    }
}
//index signature
interface ChaiRatings {
    [flavor:string] : number
}

const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4.5
}

interface User {
    name: string
}
interface User {
    age:number
}
//interfaces Merge
const u: User = {
    name: "Gurashish",
    age: 21
}

interface A {a:string}
interface B {b:string}

interface C extends A,B {}
