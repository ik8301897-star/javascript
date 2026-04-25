
// Take something & return something

// function sumoftwonum (num1 , num2){
//     let sum = num1 + num2;
//     return sum;
// }

// let ans = sumoftwonum(23,89);
// console.log("Sum =",ans);


// take Nothing & and return Something

// function evenOdd (){
//     let num = 131;
//     if(num%2==0){
//         return "Even Number"
//     }
//     else{
//         return "Odd Number"
//     }
// }
// let ans1 = evenOdd();
// console.log(ans1);



// Q1  Write a program to call a function that returns the subtraction of two nmbers and print the result.

// function subtractofnum (a,b){
//     let sub = a - b;
//     return sub;
// }

// let subract = subtractofnum(45,15);
// console.log(subract);


// Q2  Write a program to call a function that prints the multiplication of two numbers.

// function multiply (a,b){
//     console.log(a * b);

// }
// let a = 150;
// let b = 2;

// multiply(a,b)

// Q3 Write a program to call a function that takes two user inputs and passess it to a function that returns the addition of these numbers.


// function addition(a,b){
//     let sum = a + b;
//     return sum;
// }
// let solution = addition(33,26)
// console.log(solution);


// Q4   Write a program to call a function that take two user iputs and returns the multiplication of the two numbers

// function multiplication(a,b){
//     let multi = a * b;
//     return multi;
// }
// let answer = multiplication(11 , 11);
// console.log(answer);


// Q5 Write a program to call a function that takes user input and pass it to a function that prints its table.

// let user = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// user.question("Enter a Number:", function(first) {
//     let num = Number(first);
//     function printtable(num) {
//         let sp = 1;

//         while (sp <= 10) {
//             console.log(num * sp);
//             sp++

//         }
//     }
//     printtable(num);
// })

// let user = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function printTable(num){
//     let sp = 1;
//     while(sp <= 10){
//         console.log(num * sp);
//         sp++;
//     }
// }

// user.question("Enter a Number: ", function(first){
//     let num = Number(first);
//     printTable(num); 
//     user.close();
// });


// printTable(34);


// Q6   Ek function banao jo 2 numbers ka addition kare.   

// let user = require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// function add (a,b){
//     return a + b;
// }
// user.question("Enter a first Number:",function(num1){
//     user.question("Enter a second Number",function(num2){
//         let result = add (Number(num1), Number(num2));
//         console.log(result);
//         user.close()
        
//     })
// })


// Q7 Ek function banao jo number even hai ya odd bataye.

let user = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
function evenOdd (num){
    if(num % 2 ==0){
        return "Even Number"
    }
    else{
        return "Odd Number"
    }
}
user.question("Enter a Number:",function(even){
    let num = Number(even);
    console.log((evenOdd(num)));
    user.close()
    
})

