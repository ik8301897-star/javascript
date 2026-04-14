
// Q1  Write a program to print 
// let c = 1;
// while(c<=10){
//     console.log("Coding Age");
//     c++
// }
// for(let c =1; c <=10 ; c++){
//     console.log("Coding Age");



    
// }


// Q2  Write a program to take a number from a user and print that number 100 times.
// let number = require("readline").createInterface({
//     input: process.stdin,
//     output:process.stdout
// })
// number.question("Enter a number:",function(input){
//     let num = Number(input);
//     for(let a =1; a<=100 ; a++){
//         console.log(num);
        
//     }
//     number.close()
// })

// while loop method

// let number = require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// number.question("Enter a number:",function(input){
//     let num = Number(input);
//     let a = 1;
//     while(a<=100){
//         console.log(num);
//         a++
        
//     }
//     number.close()
// })

// Q3 Write a program to take a number from the user and print from the user and print from 1 to till the user's input.

// let number = require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// number.question("Enter a number:",function(input){
//     let num = Number(input);
//     let sp = 1;
//     while(sp<=num){
//         console.log(sp);
//         sp++
        
//     }
//     number.close()
// })

// for method loop
// let number = require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// number.question("Enter a number:",function(mynumber){
//     let num = Number(mynumber)
//     for(let sp = 1 ; sp<=num ; sp++){
//         console.log(sp);
        
//     }
//     number.close()
// })


// Q4 Write a program to take a number from a user and print from user input to 1. 
// let user = require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// user.question("Enter a number",function(pro){
//     let sp = Number(pro);
//     let ep = 1;
//     while(sp>=ep){
//         console.log(sp);
//         sp--
        
//     }
//     user.close()
// })

// let user = require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// user.question("Enter a number:",function(noob){
//     let sp = Number(noob);
//     for(let ep =1 ; sp>=ep ; sp--){
//         console.log(sp);
        
//     }
//     user.close()

// })

// Q9 Write a program to take a number from the user and print the sun of 1 to that number.
// let user = require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// user.question("Enter a number :",function(noob){
//     let ep = Number(noob)
//     let sp = 1 , sum = 0
//     while(sp<=ep){
//         sum = sum + sp;
//         sp = sp + 1
//     }
//     console.log(sum);
//     user.close()
// })

// Q10 Write a program to take a number from the user and print the factorial of the given number.

// let fact =require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// fact.question("Enter a number:",function(pro){
//     let ep = Number(pro);
//     let sp = 1 , facto = 1;
//     while(sp<=ep){
//        facto = facto * sp ;
//        sp = sp + 1;
        
//     }
//     console.log(facto);

//     fact.close()
    
// })

// Q11 Write a program to take a number from the user and. Find an even number from 1 to a given number.

// let given = require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// given.question("Enter a number:",function(mera){
//     let ep = Number(mera);
//     let sp = 2 
//     while(sp<=ep && sp % 2==0){
//         console.log(sp);
//         sp = sp + 2
        
//     }
//     given.close()

// })

// Q12   Write a program to take a number from the user and. Find an odd number from 1 to a given number.

// let program = require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// program.question("Enter a number:",function(bomb){
//     let ep = Number(bomb);
//     let sp = 1;
//     while(sp<=ep && sp % 2 !== 0){
//         console.log(sp);
//         sp = sp + 2
        
//     }
//     program.close()
// })

let sum = 0;
for(let i = 1; i<=5;i++){
    sum += i;
}
console.log(sum);


