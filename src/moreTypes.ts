let response: any = "42";
let numericResponse: number = response; // No error, but we lose type safety and autocompletion features.
let numericResponseWithAssertion: number = response as number;
let numericLength: number = (response as string).length; 

type Book = {
    title: string;
}

let bookString = `{ "title": "The Great Gatsby" }`;
let bookObject = JSON.parse(bookString) as Book; // We assert that the parsed object has the shape of a Book.

console.log(bookObject.title);

const inputElement = document.getElementById("username") as HTMLInputElement; 

let value: any 
value = "Hello, World!"
value = [1,2,3]
value = 2.5
value.toUpperCase(); // No error, but this will cause a runtime error if value is not a string. 

let newValue: unknown;
newValue = "Hello, World!"
newValue = [1,2,3]
newValue = 2.5
if (typeof newValue === "string") {
    newValue.toUpperCase(); // No error, and this is safe because we have checked the type of newValue before calling the method.
}                             

try {

}
catch (error) {
    if (error instanceof Error) {
        console .error(error.message); // No error, and this is safe because we have checked that error is an instance of Error before accessing the message property.
    }
    console.error("An unknown error occurred"); // This will handle any other types of errors that are not instances of Error.
}  

const data : unknown = "This is some data from an API";
const strData: string = data as string; // We assert that the data is a string, but we should be careful when doing this because it can lead to runtime errors if the assertion is incorrect.

type Role = "admin" | "user" |  "superadmin";
function redirectBasedOnRole(role: Role): void {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard...");
        return
    }
    if (role === "user") {
        console.log("Redirecting to user homepage...");
        return
    }
    role; 
}

function neverReturns(): never {
    while (true) {
        // This function will never return because it has an infinite loop.
    }
}                 
