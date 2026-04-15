
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

 // Q13  Write a program to take two numbers from the user and. Find an even number between them.

//  let think = require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout,
//  })
// think.question("Enter a starting number:",function(first){
//     think.question("Enter a end number :",function(second){
//         let sp = Number(first);
//         let ep = Number(second);
//         while(sp <=ep){
//             if(sp % 2==0){
//                 console.log(sp);
                
//             }
//             else if(sp++){
//                 console.log(sp);
                
//             }
//             else{
//                 console.log("invalid input");
                
//             }
//             sp = sp + 2
//         }
//     })
  
// })


// Q14 Write a program to take two numbers from the user and. Find an odd number between them.

// let take = require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// take.question("Enter a starting number:",function(first){
//     take.question("Enter a ending number:",function(second){
//         let sp = Number(first);
//         let ep = Number(second);
//         while(sp<=ep){
//             if(sp % 2 !==0 ){
//                 console.log(sp);
                
//             }
//             else if(sp++){
//                 console.log(sp);
                
//             }
//             else{
//                 console.log("invalid number");
                
//             }
//             sp = sp + 2
//         }
//         take.close()
//     })
// })


// Q15  Write a program to take two numbers from the user and . find the sum of all even numbers present between them.

// let find = require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// find.question("Enter a starting number:",function(first){
//     find.question("Enter a ending number:",function(second){
//         let sp = Number(first);
//         let ep = Number(second);
//         let sum = 0;
//         while(sp <= ep){
//             if(sp % 2 == 0){
//                 sum = sum + sp
//             }
//             else if (sp++){
//                 sum = sum + sp
//             }
//             else{
//                 console.log("invalid number");
                
//             }
//             sp = sp + 2
//         }
//         console.log(sum);
//         find.close()
        
//     })
// })


// Q16 Write a program to take two numbers from the user and find the sum of all odd numbers presend between them.

// let them = require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout,
// })
// them.question("Enter a starting number:",function(first){
//     them.question("Enter a ending number:",function(second){
//         let sp = Number(first);
//         let ep = Number(second);
//         let sum = 0;
//         while(sp<=ep){
//             if(sp % 2!==0){
//                 sum = sum + sp

//             }
//             else if(sp++){
//                 sum = sum + sp
//             }
//             else{
//                 console.log("invalid number");
                
//             }
//             sp = sp + 2
//         }
//         console.log(sum);
//         them.close()
        
//     })
// })


// Q17  Write a program to take two numbers from the user and find the average of all numbers present between them.

// let present = require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
    
// })
// present.question("Enter a starting number:",function(first){
//     present.question("Enter a ending number:",function(second){
//         let sp = Number(first);
//         let ep = Number(second);
//         let sum = 0
//         while(sp <= ep){
//             sum = sum + sp;
//             sp = sp + 1
//         }
//         console.log(sum / ep);
//         present.close()
        
//     })
// })


// Q18  Write a program to take two numbers from the user, one as a base and second as a power calculate and print.

let one = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
one.question("Enter a base of number:",function(first){
    one.question("Enter a power of base:",function(second){
        let base = Number(first);
        let power = Number(second);
        if(base > 0 && power >= 0){
            console.log(base ** power);
            
        }
        one.close()
    })
})

