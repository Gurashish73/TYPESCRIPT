//union types allow us to declare a variable that can hold more than one type of value. We can use the pipe (|) symbol to separate the different types.
let subs: number | string = "1M";

let apiRequestStatus: "pending" | "success" | "failure" =  "pending";

let airlineSeat : "aisle" | "window" | "middle" = "window";
airlineSeat = "aisle";

const orders = ['12','20','28','42']

//any type allows us to declare a variable that can hold any type of value. It is the most flexible type, but it also means that we lose type safety and autocompletion features. (Try to Avoid it)

let currentorder: string | undefined;

for (let order of orders) {
    if (order === '20') {
        currentorder = order;
        break;
    }
}

console.log(currentorder);