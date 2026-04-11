
// SWITCH CASE PRACTICE QUESTION
// Q1
// Day of the Week 

let day = 5;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid number");

}

// SIMPLE CALCULATOR
// Q2
let a = 8, b = 2, op = "/"

switch (op) {
    case "+":
        console.log("sum =", a + b);
        break;

    case "-":
        console.log("difference =", a - b);
        break;

    case "*":
        console.log("Multiply =", a * b);
        break;

    case "/":
        console.log("divide =", a / b);
        break;

    case "%":
        console.log("Modulus =", a % b);
        break;

    default:
        console.log("invalid input");

}
// Season finder
// Q3

let month = 2;

switch (month) {
    case 1:
    case 2:
    case 12:
        console.log("winter");
        break;

    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;

    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;

    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;

    default:
        console.log("Invalid input");


}
// Menu - Based Operation
// Q4

let c = 20, d = 5, choice = 2

switch (choice) {
    case 1:
        console.log("Add =", c + d);
        break;

    case 2:
        console.log("Subtract =", c - d);
        break;

    case 3:
        console.log("Multiply =", c * d);
        break;

    case 4:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Input");

}

// Month Name
// Q5
let months = 11;
switch (months) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;

    case 6:
        console.log("June");
        break;

    case 7:
        console.log("July");
        break;

    case 8:
        console.log("August");
        break;

    case 9:
        console.log("September");
        break;

    case 10:
        console.log("October");
        break;

    case 11:
        console.log("November");
        break;

    case 12:
        console.log("December");
        break;

    default:
        console.log("Invalid Number");


}

// CHARACTER TYPE SWITCH
// Q6
// let ch = "2";
// switch


// VOWEL CHECK (SWITCH)
// Q7
let vo = "b";
switch (vo) {
    case "a":
    case "A":
    case "e":
    case "E":
    case "i":
    case "I":
    case "o":
    case "O":
    case "u":
    case "U":
        console.log("Vowel");
        break;

        default:
            console.log("Not a vowel");
 
}




