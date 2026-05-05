

// Q1   Check karo number even hai ya odd (if-else)

    // let num = 11;

    // if(num % 2 == 0){
    //     console.log("Even Number");
        
    // }
    // else{
    //     console.log("Odd Number");
        
    // }


    // Q2 Largest of 3 numbers find karo

    // let a = 32, b = 23 , c = 14;

    // if(a>b && a > c){
    //     console.log(a,"is largest Number");
        
    // }
    // else if(b>a && b>c){
    //     console.log(b,"is largest Number");
        
    // }
    // else{
    //     console.log(c,"is Largest Number");
        
    // }



    // Q3  Leap year check karo

    // let year = 2028;

    // if((year % 4 == 0 && year % 100 !==0)|| (year % 400 == 0)){
    //     console.log("Leap Year");
        
    // }
    // else{
    //     console.log("Not a Leap Year");
        
    // }



    // Q4 1 se N tak sum nikalna (loop use karke).

    // let num = 5 , sp = 1
    // let sum = 0;

    // for(let sp = 1; sp<=num ; sp++){
    //     sum = sum + sp;
    // }
    // console.log("Sum =", sum);



    // Q5  Multiplication table print karo (user input se).

    // let num = 3;

    // for(let sp = 1; sp<=10 ; sp++){
    //     console.log(num,"*", sp , "=", num * sp);
        
    // }



    // Q6  Star pattern print karo:
    //    *
    //    * *
    //    * * *
    //    * * * *

    // let num = 4;

    // for(let i = 1; i<=num; i++){
    //     for(let j = 1; j<=i ; j++){
    //         process.stdout.write("* ")
    //     }
    //     console.log();
        
    // }
    



    // Q7  Reverse star pattern:
    //   * * * *
    //   * * *
    //   * *
    //   *

    // let num = 4;
    // let a = num;

    // for(let i = 1 ; i<=num ; i++){
    //     for(let j = 1; j<=a ; j++){
    //         process.stdout.write("* ")
    //     }
    //     a--
    //     console.log();
        
    // }



    // Q8  Number pattern:  
    //   1
    //   1 2
    //   1 2 3
    //   1 2 3 4

    // let num = 4;

    // for(let i = 1; i<=num ; i++){
    //     for(let j = 1; j<=i; j++){
    //         process.stdout.write(`${j} `)
    //     }
    //     console.log();
        
    // }


    

    // Q9 Ek number reverse karo (1234 → 4321)

    // let num = 1234;
    // let rev = 0;

    // while(num>0){
    //     let rem = num% 10;
    //     rev = rev * 10 + rem;
    //     num = parseInt(num / 10);

    // }
    // console.log(rev);



    // reverse number;

//   let num = 9876;
//   let rev = 0;

//   while(num>0){
//     let rem = num % 10;
//     rev = rev * 10 + rem;
//     num = parseInt(num / 10);

//   }
//   console.log(rev);



//  Q10  Write a program to print "Coding Age " 10 times.

// for(sp = 1; sp<=10 ; sp++){
//     console.log("Coding Age");
    
// }



// Q11  Write a program to take a number from a user and print that number 100 times.  

// let num = 3;

// for(sp = 1; sp<=100; sp++){
//     console.log(num);
    
// }


// Q12   Write a program to take a number from the user and print from 1 to till the user's input.

// let input = 5;

// for(let sp = 1; sp<=input ; sp++){
//     console.log(sp);
    
// }



// Q13  write a program to take a number from a user and print from user input to 1.

// let input = 5;
// let ep = 1;

// for(input = 5 ; input>=ep ; input--){
//     console.log(input);
    
// }


// Q14  Write a program to take a number from the user and print the sum of 1 to that number.

// let input = 5;
// let sum = 0;

// for(let sp = 1; sp<=input; sp++){
//     sum = sum + sp;
// }
//   console.log("Sum =",sum);



// Q15  Write a program to take a number from the user and print the factorial of the given number.

// let num = 5;
// let fact = 1;

// for(let sp = 1; sp<=num ; sp++){
//     fact = fact * sp;
// }
// console.log("Factorial =",fact);



// Q16  Write a program to take a number from the user and. Find an even number from 1 to a given number.

// let num = 7;

// for(let sp = 1; sp<=num; sp++){
//     if(sp % 2 ==0){
//         console.log("Even Number is", sp);
        
//     }
// }



// Q17  Write a program to take a number from the user and. Find an odd number from 1 to a given number.

// let num = 7;

// for(let sp = 1; sp<=num; sp++){
//     if(sp % 2 !==0){
//         console.log("Odd Number", sp);
        
//     }
// }





// Q18  Write a program to take two numbers from the user and. Find an even number between them.

// let num1 = 56 , num2 = 87;
// let sp = num1

// for(sp; sp<=num2 ; sp++){
//     if(sp % 2 ==0){
//         console.log(sp);
        
//     }
// }




// Q19  Write a program to take two numbers from the user and. find an odd number between them.

// let num1 = 2 , num2 = 17;
// let sp = num1;

// for(sp;sp<=num2 ; sp++){
//     if(sp % 2!==0){
//         console.log(sp);
        
//     }
// }





// Q20  Write a program to take two numbers from the user and. Find the sum of all even numbers present between them.

// let a = 2 , b = 7;
// let sp = a , sum = 0

// for(sp; sp<=b; sp++){
//     if(sp % 2==0){
//         sum = sum + sp;

//     }
// }
// console.log("Sum of all Even Number =",sum);




// Q21  Write a program to take two numbers from the user and find the sum of all odd numebrs present between them.


// let a = 3 , b = 6;
// let sp = a , sum = 0;

// for(sp; sp<=b ; sp++){
//     if(sp % 2 !==0){
//         sum = sum + sp
//     }
// }
// console.log("Sum of all Odd number Between them =", sum);



// Q22 Write a program to take two numbers from the user and find the average of all numbers present between them.

// let a = 65 , b = 98;
// let sp = a , sum = 0 , count = 0;

// for(sp ; sp<=b ; sp++){
//     count++;
//     sum = sum + sp;
// }
// let average = sum / count;
// console.log("Average =", average);




// Q23  Write a program to take two numbers from the user, one as a base and second as a power calculate and print.

// let base = 2;
// let power = 3;

// while(base>0){
//     console.log(base ,"*",power ,"=", base ** power);
//     break;
    
// }



// Q24   Write a program to take a number from the user and count the digit present in that number.

// let num = 183533333;
// let count = 0;

// while(num>0){
//     num = parseInt(num / 10);
//     count++

// }
// console.log(count);




// Q25  Write a program to take a number from the user and reverse that number.

// let num = 435;
// let rev = 0;

// while(num>0){
//     let rem = num % 10;
//     rev = rev * 10 + rem;
//     num = parseInt(num / 10);
// }
// console.log(rev);



// Q26  Write a program to print numbers 1 to 10 but skip whose divisible by 3 using continue keyword.

// let sp = 1;

// for(sp = 1; sp<=10; sp++){
//     if(sp % 3 ===0){
//         continue;
//     }
//     console.log(sp);
    
// }



// Q27  Write a program to take two numbers from the user and print the count of numbers present between them.

// let a = 4 , b = 8;
// let count = 0 , sp = a + 1

// for(sp; sp<b ; sp++){
//     count++

// }
// console.log(count);




// Q28  Write a program to take two numbers from the user and find the greatest common factor of them
// 

// let num1 = 8 , num2 = 20;
// let sp = 1;
// let store = 0;
// while(sp < num1){
//     if(num1 % sp == 0 && num2 % sp == 0){
//         store = sp;
//     }sp++
// }
// console.log(sp);



// Q29  Write a program to take a number from the user and check whether a number is a prime number or not.

let num = 12;
let sp = 1;
let count = 0;

while(sp<=num){
    if(num % sp == 0){
        count++
    }
    sp++
}
if(count === 2){
    console.log("Prime Number");
    
}
else{
    console.log("Not a prime number");
    
}









  

    