
// JavaScript Conditionals
// else-if Ladder
// Q1  Grading System

let marks = 65;
if(marks>=80){
    console.log("Grade A");
    
}
else if(marks>=60){
    console.log("Grade B");
    
}
else if(marks>=40){
    console.log("Grade C");
    
}
else{
    console.log("Fail");
    
}

// Q3 
// Age Category

let age = 9;
if(age>=0 && age < 12){
    console.log("Child");
    
}
else if(age <=19){
    console.log("Teen");
    
}
else{
    console.log("Adult");
    
}

// Q4
// Tax Rate Based on Salary
let salary = 9000;
if(salary<=10000){
    console.log("0% tax");
    
}
else if(salary<=30000){
    console.log("10% tax");
    
}
else if(salary<=50000){
    console.log("20% tax");
    
}
else{
    console.log("30% tax");
    
}

// Q5
// Electricity Bill Calculator
// let units = 210;
// if(units<=100 && units * 5){
//     console.log("Rupees",units);
    
// }
// else if(units<=200 && units * 6){
//     console.log("Rupees",units);
    
// }
// else{

// }
 
// Q6 
// Student Division my Marks
let mark = 48;
if(mark>=60){
    console.log("First Division");
    
}
else if(mark>=45){
    console.log("Second Division");
    
}
else if(mark>=33){
    console.log("third Division");
    
}
else{
    console.log("Fail");
    
}

// Q7
// Temperature Check
let temp = 20;
if(temp<20){
    console.log("Cold");
    
}
else if(temp<35){
    console.log("Warm");
    
}
else{
    console.log("Hot");
    
}

// Q8
// Digit Count
let num = 10;
if(num>0 && num < 10){
    console.log("1- digit number");
    
}
else if(num>=10 && num < 100){
    console.log("2-digit number");
    
}
else if(num >=100 && num<=999){
    console.log("3-digit");
    
}
else{
    console.log("4-digit number");
    
}

// Ternary Operator
// Q1  Even or Odd
let ter = 11;
(ter%2==0)?console.log("Even"):console.log("Odd");

// Q2  Adult or Minor
let tage = 19;
(tage>=18)?console.log("Adult"):console.log("minor");

// Q3  Greater Number
let a = 32, b= 30;
(a>b)?console.log(a,"is greater"):console.log(b,"is greater");

// Q4  Pass/Fail (ternary)
let tmarks = 38;
(tmarks<40)?console.log("Fail"):console.log("Pass");

// Q5 Maximum of Three
// let c = 4 , d= 19, e =11;
// (c>d)?(c>e:a)

// Q7 Absolute Value
let value = -12;
let absolute = (value>=0)? console.log(value):console.log(-value);


 


// Q8  Divisible by 2
let div = 13;
(div % 2==0 )?console.log("Divisible by 2"):console.log("Not divisible by 2");
;













