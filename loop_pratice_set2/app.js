
// Q1  Write a program to take two numbers from the user and print "Coding "on Even number and "Age" on Odd number

// let sp = 1 ;
// let ep = 5;
// while(sp<=ep){
//     if(sp%2==0){
//         console.log(sp,"Coding ");
        
//     }
//     else{
//         console.log(sp,"Age");
        
//     }
//     sp++
// }



// Q2  Write a program to take a number from the user and print the table of that number.

// let num = 2;
// let sp = 1;
// let ep = 10;
// while(sp<=ep){
//     console.log("2 *", sp,"=",num*sp);
//     sp++
    
// }

// Q3  Write a program to print all the multiples of 5 between 1 and 100.

// let sp = 1 , ep = 100;
// while(sp<=ep){
//     if(sp%5==0){
//         console.log(sp);
        
//     }
//     sp++
// }


// Q4 Write a program to take a number from the user and print the Sum of all digit of that number.

// let num = 842;
// let count = 0;
// while(num>0){
//     remainder = num % 10;
//     count = count + remainder;
//     num = parseInt(num/10);
// }
// console.log(count);


// Q5  Write a program to take a number from the user and find the first and last digit of that number.

// let num = 9842;
//  lastdigit = num % 10;

//  while(num >=10){
//     num = parseInt(num /10)
//  }
//  console.log("first digit",num);
//  console.log("Last digit",lastdigit);


// Q8  Write a program to take two numbers from the user and print the table present between them.

// let num1 = 2 , num2 = 4;
// sp = 1 , ep = 10;

// while(num1<=num2){
   
//     for(sp = 1; sp<=ep; sp++){
//         console.log(num1 * sp);
        
//     }
//     num1++
    
// }


// Q9 Write a program to take two numbers from the user and print the prime number present between them.

// let num1 = 3 , num2 = 6 ,  count = 0

// while(num1<=num2){
//     count = 0;
//     for( let sp = 1;sp<=num1;sp++){
//         if(num1 % sp ===0){
//             count++        
//         }     
   
//     }
//     if(count==2){
//         console.log(num1);
        
//     }
 
    
   
    
//     num1++
// }


let num = 672;
let max = -9999;
let min = 9999;

while(num>0){
    let rem = num % 10;
    if(rem < min){
        min = rem;
    }
    if(rem>max){
        max = rem
    }
    num =  parseInt(num / 10);
}
console.log(max);
console.log(min);







    
  

   
   
 






 
 

