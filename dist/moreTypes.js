"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "42";
let numericResponse = response; // No error, but we lose type safety and autocompletion features.
let numericResponseWithAssertion = response;
let numericLength = response.length;
let bookString = `{ "title": "The Great Gatsby" }`;
let bookObject = JSON.parse(bookString); // We assert that the parsed object has the shape of a Book.
console.log(bookObject.title);
const inputElement = document.getElementById("username");
let value;
value = "Hello, World!";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase(); // No error, but this will cause a runtime error if value is not a string. 
let newValue;
newValue = "Hello, World!";
newValue = [1, 2, 3];
newValue = 2.5;
if (typeof newValue === "string") {
    newValue.toUpperCase(); // No error, and this is safe because we have checked the type of newValue before calling the method.
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message); // No error, and this is safe because we have checked that error is an instance of Error before accessing the message property.
    }
    console.error("An unknown error occurred"); // This will handle any other types of errors that are not instances of Error.
}
const data = "This is some data from an API";
const strData = data; // We assert that the data is a string, but we should be careful when doing this because it can lead to runtime errors if the assertion is incorrect.
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard...");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user homepage...");
        return;
    }
    role;
}
function neverReturns() {
    while (true) {
        // This function will never return because it has an infinite loop.
    }
}
//# sourceMappingURL=moreTypes.js.map