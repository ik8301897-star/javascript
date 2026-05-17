


// Q1 1 se 10 tak numbers print karo.

// let sp = 1;

// for( sp = 1 ; sp<=10 ; sp++){
//     console.log(sp);
    
// }


// Q2 10 se 1 tak reverse print karo.

// for(let sp = 10 ; sp>=1; sp--){
//     console.log(sp);
    
// }



// Q3 1 se 50 tak saare even numbers print karo.

// let sp = 1;
// let ep = 50;

// for(sp = 1; sp<=ep; sp++){
//     if(sp % 2==0){
//         console.log(sp);
        
//     }
// }



// Q4 1 se 50 tak odd numbers print karo.

// let sp = 1;
// let ep = 50;

// for(sp = 1; sp<=ep; sp++){
//     if(sp % 2 ==1){
//         console.log(sp);
        
//     }
// }



// Q5 Kisi number ka table print karo.

// let table = 5;

// for(let i = 1; i<=10; i++){
//     console.log(table, "*", i ,"=", table * i);
    
// }



// Q6 1 se n tak sum nikalo.

// let num = 5;
// let sum =0;

// for(let i = 1; i<=num; i++){
//     sum = sum + i ;

// }
// console.log(sum);




// Q7 Kisi number ka factorial nikalo.

// let num = 5;
// let fact = 1;
// for(let sp = 1; sp<=num; sp++){
//     fact = fact * sp;
// }
// console.log(fact);




// Q8  Ek number me kitne digits hain count karo.

// let num = 7373737;
// let count = 0;

// while(num>0){
//     num = parseInt(num / 10);
//     count++
// }
// console.log("Count =",count);




// Q9  Number ke digits ka sum nikalo.


// let num = 1234;
// let count = 0;

// while(num>0){
//     rem = num % 10;
//     count = count + rem;
//     num = parseInt(num /10);

// }
// console.log(count);




// Q10  Number ko reverse karo.

// let num = 4321;
// let rev = 0
// while(num>0){
//     rem = num % 10;
//     rev = rev * 10 + rem;
//     num = parseInt(num / 10);
// }
// console.log(rev);



// Q11 Write a program to take a number from the user and. find an even number from 1 to a given number.

// let num = 7;

// for(let i = 1; i<=num; i++){
//     if(i % 2 === 0){
//         console.log(i);
        
//     }
// }




// Q12 Write a program to take a number from the user and. Find an odd number from 1 to a given number.

// let num = 7;

// for(let i = 1; i<=num ; i++){
//     if(i % 2 == 1){
//         console.log(i);
        
//     }
// }




// Q13  Write a program to take two numbers from the user and. Find an even number between them.

// let num1 = 2;
// let num2 = 11;

// for(num1 = 2; num1<=num2 ; num1++){
//     if(num1 % 2 == 0){
//         console.log(num1);
        
//     }
// }



// Q14  Write a progrma to take two numbers from the user and. Find an odd number between them.

// let a = 2;
// let b = 11;

// for(a = 2; a<=b; a++){
//     if(a % 2 ===1 ){
//         console.log(a);
        
//     }
// }



// Q15  Write a program to take two numbers from the user and. find the sum of all even numbers present between them.


// let a = 2;
// let b = 7;
// let sum = 0;

// for(a = 2; a<=b ; a++){
//     if(a % 2 ===0){
//         sum = sum + a;
//     }
// }
// console.log("Sum of even Number =",sum);




// Q16 Write a program to take two numbers from the user and Find the sum of all odd numebrs present between them.

// let a = 3;
// let b = 6;
// let sum = 0;

// for(a = 3; a<=b; a++){
//     if(a % 2 ==1){
//         sum = sum + a
//     }
// }
// console.log("Sum of odd number =",sum);




// Q17 Write a program to take two numbers from the user and find the average of all numbers present between them.

// let a = 1;
// let b = 5;
// let sum = 0;
// let count = 0;
// for(a = 1; a<=b ; a++){
//     count++
//     sum = sum + a;

// }

// let average = sum / count;
// console.log(average);



// Q18  Write a program to take two numbers from the user, one as a base and second as a power calculate an print.

// let base = 2;
// let power = 3;
// let result = 1;

// for(let i = 1; i<=power ; i++){
//     result = result * base
// }
// console.log(result);




// Q19  Write a program to take a number from the user and count the digit present in that number.

// let num = 1234;
// let count = 0;

// while(num>0){
//     count++;
//     num = parseInt(num / 10);

// }
// console.log(count);




// Q20  Write a program to take a number from the user and reverse that number.

// let num = 1234;
// let rev = 0;

// while(num>0){
//     rem = num % 10;
//     rev = rev * 10 + rem;
//     num = parseInt(num / 10);
// }
// console.log(rev);




// Q21  Write a program to print numbers 1 to 10 but skip whose divisible by 3 using CONTINUE keyword.

// for(let i = 1; i<=10; i++){
//     if(i % 3 ==0){
//         continue;
//     }
//     console.log(i);
    
// }



// Q22 Write a program to keep taking input from the user until he gives a negative number.

// let input = prompt("Enter a number ");

// while(input>0){
//     input = prompt("Enter a number")
// }

// if(input<0){
//     console.log("Found a negative number");
    
// }




// Q23  Write a program to take two numbers from the user and print the count of numbers present between them.

// let a = 4; 
// let b = 8;
// let count = 0;

// for(let i = a+1 ; i<b ; i++){
//     count++
// }
// console.log(count);



// Q24  Write a program to take two numbers from the user and find the greastest common factor of them,

// let num1 = 10;
// let num2 = 20;
// let factor = 0;

// for(let i = 1; i<=num1 ; i++){
//     if((num1 % i ===0) && (num2 % i ===0)){
//         factor = i
//     }

// }
// console.log("Greatest common factor is =",factor);




// Q25  Write a program to take a number from the user and check whether a number is a prime number or not.

// let num = 9;
// let count = 0;

// for(let i = 1; i<=num; i++){
//     if(num % i ==0){
//         count++
//     }
// }
// if(count ===2){
//     console.log(num,"is a prime number");
    
// }
// else{
//     console.log(num,"is a not a prime number");
    
// }



// PRACTICE SET 2 LOOP ---------------------------


// Q26  Write a program to take two numbers from the user and print "Coding" on Even Number and "Age " on Odd Number 

// let a = 2; 
// let b = 5;

// for(a = 2; a<=b; a++){
//     if(a % 2 ==0){
//         console.log(a,"Coding");
        
//     }
//     else{
//         console.log(a,"Age");
        
//     }
// }




// Q27 Write a program to take a number from the user and prin the table of that number.

// let num = 2;

// for(let i = 1; i<=10 ; i++){
//     console.log(num, "*", i , "=", num * i);
    
// }




// Q28  Write a program to print all the multiples of 5 between 1 and 100.

// for(let i = 1; i<=100; i++){
//     if(i % 5 ==0){
//         console.log(i);
        
//     }
// }


// Q29 Write a program to take a number from the user and print the sum of all digits of that numbers.

// let num = 842;
// let sum = 0;

// while(num>0){
//    rem = num % 10;
//    sum = sum + rem;
//    num = parseInt(num / 10)
// }
// console.log(sum);




// Q30 Write a program to take a number from the user and find the maximum and minimum digit of that number.

// let num = 8235;
// let max = 1;
// let min = 9;

// while(num > 0){
//     rem = num % 10;
//     if(rem>max){
//         max = rem;
//     }
//     if(rem<min){
//         min = rem;
//     }
//     num = parseInt(num / 10);
// }
// console.log("max digit is =",max);
// console.log("min digit is =",min);





// Q31 Write a program to take two numbers from the user and print the table present between them.

// let num1 = 2;
// let num2 = 4;

// for(num1 = 2; num1<=num2 ; num1++){
//     for(let i = 1; i<=10; i++){
//         console.log(num1 ,"*", i, "=", num1 * i);
        
//     }
// }



// Q32 Write a program to take two numbers from the user and print the prime number present between them.

// let num1 = 3;
// let num2 = 6;

// while(num1 < num2){
//     let count = 0;

//     for(let i = 1; i<=num1 ; i++){
//         if(num1 % i ==0){
//             count++
//         }
//     }
//     if(count == 2){
//         console.log(num1,"is a prime number");
        
//     }
//     num1++
// }





// Q33 Write a program to take a number from the user and fint the first and last digit of that number.

// let num = 2849;

// let lastdigit = num % 10;

// while(num>10){
//    num = parseInt(num / 10);
// }

// console.log("last digit =",lastdigit);
// console.log("first digit =",num);







// PATTERN LOOP QUESTION -------------------------

// Q34

// *
// **
// ***
// ****
// *****

// let num = 5;

// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=i ; j++){
//         process.stdout.write("*")
//     }
//     console.log();
    
// }




// Q35 

// *****
// ****
// ***
// **
// *

// let num = 5;

// for(let i = 1; i<=num; i++){
//     for(let j = num ; j>=i ; j--){
//         process.stdout.write("*")
//     }
    
//     console.log();
    
// }





// Q36

// *****
// *****
// *****
// *****
// *****

// let num = 5;


// for(let i = 1; i<=num ; i++){
//     for(let j = 1; j<=num; j++){
//         process.stdout.write("*")
//     }
//     console.log();
    
// }



// Q37

// *
// **
// ***
// ****
// ***
// **
// *

// let num = 4;

// for(let i = 1; i<=num ; i++){
//     for(let j = 1 ; j<=i ; j++ ){
//         process.stdout.write("*")
//     }
//     console.log();
    
// }

// for(let i = num -1 ; i>=1 ; i--){
//     for(let j =1 ; j<=i ; j++){
//         process.stdout.write("*")
//     }
//     console.log();
    
// }




// Q38

//     *
//    **
//   ***
//  ****
// *****

// let num = 5;
// let a = num;

// for(let i = 1; i<=num ; i++){
//     for(let j = 1; j<=a; j++){
//         process.stdout.write(" ")
//     }
//     for(let k = 1; k<=i ; k++ ){
//         process.stdout.write("*")
//     }
//     a--
//     console.log();
    
// }



// Q39

// 1
// 12
// 123
// 1234
// 12345


// let num = 5;

// for(let i = 1; i<=num; i++){
//     let a = 1;
//     for(let j = 1; j<=i ; j++){
//         process.stdout.write(`${a}`)
//        a++
//     }
     
//     console.log();
    
// }



// Q40  

// 12345
// 1234
// 123
// 12
// 1

// let num = 5;
// let a = num;

// for(let i = 1; i<=num; i++){
//     let b = 1;
//     for(let j = 1; j<=a ; j++ ){
//         process.stdout.write(`${b}`)
//         b++
//     }
//     a--
//     console.log();
    
// }



// Q41  

// 1
// 22
// 333
// 4444
// 55555


// let num = 5;
// let a = 1;

// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=i ; j++){
//         process.stdout.write(`${a}`)
//     }
//     a++
//     console.log();
    
// }




// Q42 

// 5
// 54
// 543
// 5432
// 54321

// let num = 5;

// for(let i = 1; i<=num ; i++){
//     let a = 5;
//     for(let j = 1 ; j<=i ; j++){
//         process.stdout.write(`${a}`)
//         a--

//     }
//     console.log();
    
// }



// Q43  

// 1
// 23
// 456
// 78910


// let num = 4;
// let a = 1;

// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=i ; j++){
//         process.stdout.write(`${a}`)
//          a++
//     }
   
//     console.log();
    
// }




// Q44 

//     *
//    ***
//   *****
//  *******
// *********


// let num = 5;
// let a = 1;

// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=num-i ; j++){
//         process.stdout.write(" ")
//     }
//     for(let k = 1; k<=a ; k++ ){
//         process.stdout.write("*")
        
//     }
//     a = a+2
//     console.log();
// }



// Q45 

// *********
//  *******
//   *****
//    ***
//     *


// let num = 5;
// let a = num  * 2 -1;

// for(let i = 1; i<=num ; i++){
//     for(let j = 1; j<=i ; j++){
//         process.stdout.write(" ")
//     }
//     for(let k = 1 ; k<=a ; k++){
//         process.stdout.write("*")
//     }
//     a = a- 2
//     console.log();
    
// }




// Q46

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *


// let  num = 5;
// let a = 1;

// for(let i = 1; i<=num ; i++){
//     for(let j = 1; j<=num-i ; j++){
//         process.stdout.write(" ")
//     }
//     for(let k = 1; k<=a; k++){
//         process.stdout.write("*")
//     }
//     a= a+ 2
//     console.log();
    
    
// }
// let b = num + 2;

// for(let i = 1; i<=num-1 ; i++){
//     for(let j = 1; j<=i; j++){
//         process.stdout.write(" ")
//     }
//     for(let k = 1; k<=b ; k++){
//         process.stdout.write("*")
//     }

//     b = b-2
//     console.log();
    
// }




// Q47 

// 1
// 2 3
// 4 5 6
// 7 8 9 10


// let num = 4;
// let a = 1;

// for(let i = 1; i<=num ; i++){
//     for(let j = 1; j<=i; j++){
//         process.stdout.write(`${a} `)
//         a++
//     }
    
//     console.log();
    
// }


// LOOP QUESTION END ------------------------------------------------------------------------------------------



// FUNCTION PRACTICE QUESTION START -----------------------------------------------------



// Q48  Ek function banao jo hello print kare.

// function printHello (){
//     console.log("Hello");
    
// }

// printHello();



// Q49  Function banao jo 2 numbers add kare.

// function addTwoNum(a,b){
//     return a + b;
// }

// let result = addTwoNum(3,5);
// console.log(result);



// Q50  Function banao jo square return kare.

// function square(num){
//     return num * num;
// }

// let result = square(5);
// console.log(result);



// Q51 Function banao jo even/odd check kare.

// function checkOddEven(num){
//     if(num % 2 ==0){
//         return "Even Number"
//     }
//     else{
//         return "Odd number"
//     }
// }

// let result = checkOddEven(3);
// console.log(result);



// Q52  Function banao jo biggest of 2 numbers bataye.

// function biggestNumber(a,b){
//     if(a>b){
//         return a  ;
//     }
//     else{
//         return b ;
//     }
// }

// let result = biggestNumber(32,93);
// console.log(result);




// Q53 Write a program to call a function that returns the subtraction of two numbers and print the result.

// function subtraction(a,b){
//     return a - b;
// }
// let result = subtraction(23,11);
// console.log(result);



// Q54 Write a program to call a function that prints the multiplication of two numbers.

// function multiplication(a,b){
//     return a * b;
// }
// let result = multiplication(150,2);
// console.log(result);



// Q55 Write a program to call a function that takes two user inputs and passes it to a function that returns the addition of these numbers.

// function add (a,b){
//     return a + b;
// }
// let result = add(33,26);
// console.log(result);




// Q56 Write a program to call a function that takes user input and pass it to a function that prints its table.

// function print (num){

//     for(let i = 1; i<=10 ; i++){
//         console.log(num ,"*",i , "=", num * i);
        
//     }
// }

// print(4);



// Q57 Write a program where the user will provide an integer as input. create a function digitcount() that.

// function digitCount(num){
//     let count = 0;

//     while(num > 0){
//         count++
//         num = parseInt(num/ 10)
//     }
//     console.log(count);
    
// }
// digitCount(12345);
// digitCount(3);



// Q58  Write a program where the user will provide an integer as input. create a function reverseNumber() that.

// function reverseNumber(num){
//     let rev = 0;
//     while(num>0){
//         rem = num % 10;
//         rev = rev * 10 + rem;
//         num = parseInt(num / 10);

//     }
//     console.log(rev);
    
// }
// reverseNumber(8765);



// Q59 Write a function findGCD ( a,b) that calculates and returns the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.

// function greatest(num1,num2){
//     let factor = 0;
//     for(let i = 1; i<=num1; i++){
//         if(num1 % i == 0 && num2 % i ==0){
//             factor = i;
//         }
//     }
//     console.log(factor);
    
// }
// greatest(56,98);



// Q60 Write a program to call a function that takes user input and tells if it is prime or not.

// function prime(num){
//     let count = 0;
//     for(let i = 1; i<=num; i++){
//         if(num % i ==0){
//             count++
//         }
//     }
//     if(count ==2){
//         console.log("yes it is prime ");
        
//     }
//     else{
//         console.log("it is not prime");
        
//     }
// }
// prime(7);
// prime(8);




// Q61 Function banao jo user ka naam print kare.

// function userName(name){
//     console.log("Hello",name);
    
// }
// userName("ishu")



// Q62 3 numbers me sabse bada number return karo.

// function biggest(a,b,c){
//     if(a>b && a>c){
//         return a
//     }
//     else if(b>a && b>c){
//         return b
//     }
//     else{
//         return c
//     }
// }
//  let result = biggest(12,9,10);
//  console.log("Biggest no is",result);




//Q63 Reverse String Function

// function reverseString(string){
//     for(let i = string.length-1 ; i>=0 ; i--){
//         process.stdout.write(`${string[i]}`)
//     }
// }
// reverseString("hello")
 




// FUNCTION END ---------------------------



// RECURSION START ----------------------------------------

//  Q64 Write a recursive function to print numbers from 1 to N.

// let num = 1;

// function print (){
//     if(num  > 10){
//         return;
//     }
//     console.log(num++);
//     print()
    

// }
// print();




// Q65 Write a recursive function to print numbers from N to 1.



// function print(num,ep){
//     if(num > ep){
//         return;
//     }
//     print(num+1,ep )
//     console.log(num);
    
// }

// print(1,10);



// Q66 Find the sum of first N natural numbers using recursion.

// function sum(num){
//     if(num ==1){
//         return 1;
//     }
//     return num + sum(num-1);
// }
// let result = sum(5);
// console.log(result);




// Q67  Find factorial of a number using recursion. 

// function factorial (num){
//     if(num == 1){
//         return 1;
//     }
//     return num * factorial(num-1);
// }
// let result = factorial(5);
// console.log(result);




// Q68 ✅ 1. Print 1 to N

// let num = 1;
// function printnum(){
//     if(num>10){
//         return;
//     }
//     console.log(num++);

//     printnum();
    
// }
// printnum();



// Q69 Print N to 1.



// function printReverse(num,ep){
//     if(num>10){
//         return;
//     }
//     printReverse(num+1,ep);
//     console.log(num);
    
// }
// printReverse(1,10);


// Q70   ✅  Print Even Numbers.

// let num = 10, sp = 1;
// function printEvenNumber(){
//     if(sp>num){
//         return;
//     }
//    if(sp % 2 ==0){
//     console.log(sp);
    
//    }
//    sp++
//    printEvenNumber()
// }
// printEvenNumber();



// Q71 ✅  Print Odd Numbers.

// let num = 10 , sp = 1;

// function printOddNumber(){
//     if(sp>num){
//         return;
//     }
//     if(sp % 2==1){
//         console.log(sp);
        
//     }
//     sp++
//     printOddNumber()
// }
// printOddNumber()




// Q72 ✅  Sum of Natural Numbers.

// function sum(num){
//     if(num ==1){
//         return 1;
//     }
//     return num + sum(num - 1);
// }
// let result = sum(5);
// console.log(result);



// Q73 ✅  Factorial

// function factorial(num){
//     if(num == 1){
//         return 1;
//     }
//     return num * factorial(num -1)
// }
// let result = factorial(5);
// console.log(result);




// Q74 ✅  Sum of Digits.

// let sum = 0;

// function sumOfDigit(num){
//     if(num==0){
//         return sum;
//     }
//     rem = num % 10;
//     sum = sum + rem;
//     num = parseInt(num / 10);

//     return sumOfDigit(num)

// }
// let result = sumOfDigit(1234);
// console.log(result);




// Q75 ✅  Count Digits.

let count = 0;

function countDigit(num){
    if(num ==0){
        return count;
    }
    count++ 
    num = parseInt(num / 10);

    return countDigit(num)
}
let result = countDigit(1234);
console.log(result);
