
// Q1
// Even or Odd
let num = 5;
if(num % 2 ==0){
    console.log(num,"is Even number");

}
else{
    console.log( num,"is odd Number");
    
}
// Q2
// Positive or Negative
let num2 = -4;
if(num2>0){
    console.log(num2,"is Positive Number");
    
}
else{
    console.log(num2,"is Negative number");
    
}
// Q3 
//Voting Eligibility
let age = 17;
if(age>=18){
    console.log("Eligible to Vote");
    
}
else{
    console.log("Not eligible to vote");
    
}
// Q4
// Divisible by 10
let num3 = 33;
if(num3 % 10 ==0){
    console.log(num3,"Divisible by 10");
    
}
else{
    console.log(num3,"Not divisible by 10");
    
}
// Q5
// Passed or Fail
let marks = 34;
if(marks>=40){
    console.log("Pass");
    
}
else{
    console.log("fail");
    
}
// Q6
// Greater of Two Numbers
let num4 = 23;
let num5 = 32;
if(num4>num5){
    console.log(num4,"is greater");
    
}
else{
    console.log(num5,"is greater");
    
}
// Q7 
// 3- Digit Number Check
let num6 = 115;
if(num6>=100){
    console.log(num6,"is 3-digit number");
    
}
else{
    console.log(num6,"is Not a 3-digit number");
    
}
// Q8
// Profit or Loss
let cp = 200;
let sp = 110;
if(sp>cp){
    console.log("profit");
    
}
else{
    console.log("loss");
    
}
// Q9
// Valid Triangle check (by Angles)
let a = 40;
let b = 80;
let c = 20;
if((a+b+c == 180)){
    console.log("Valid Triangle");
}
else{
    console.log("Not a Valid Triangle");
    
}
// Q10
// Driving License Eligibility
let age1 = 19;
if(age1>=18){
    console.log("Eligible for Driving");
    
}
else{
    console.log("Not Eligible Driving");
    
}
// Q11
// check equal value
let d = 10;
let e = "10";
if(d===e){
    console.log("Equal Value");
    
}
else{
    console.log("Not Equal Value");
    
}
// Q12
// Check Not Equal 
let f = 5;
let g = "5";
if(f!==g){
    console.log("Not Equal");
    
}
else{
    console.log("Equal");
    
}


// Nested if - else -- Question Set

// Q1
// Positive , Negative or Zero
let nums = 8;
if(nums>=0){
    if(nums==0){
        console.log(nums,"is zero");
        
    }
    else{
        console.log(nums,"Positive Number");
        
    }
}
else{
    console.log(nums,"Negative Number");
    
}

// Q2
// Positive / Negative and Even / Odd
let nums2 = -5;
if(nums2>0){
    if(nums2 % 2==0){
        console.log(nums2,"Positive and Even Number");
        
    }
    else{
        console.log(nums2,"positive and odd Number ");
        
    }
}
else{
   if(nums2 % 2 ===0){
    console.log(nums2,"Negative and Even Number");
    
   }
   else{
    console.log(nums2,"Negative and Odd number");
    
   }
    
}
// Q3
// Largest,Even / Odd , Positive / Negative
// let i = 20;
// let j = 29;
// if((i>j) && (i % 2 == 0) ){
//     if(i > 0){
//         console.log(i,"is largest, Even, Positive Number");
        
//     }
//     else{
//         console.log(i,"is largest , Even, Negative Number");
        
//     }
// }
// else{
//     console.log(j,"is largest , even , positive number ");
    
// }

// Q4
// 3-Digit even / Odd check

let number = 24;
if(number>100){
    if(number % 2 == 0){
        console.log(number,"is three digit even number");
        
    }
    else{
        console.log(number,"is three digit odd number");
        
    }
}
else{
    console.log(number,"is not a three digit ");
    
}

// Q5
// Leap Year or not
let year = 1900;
if(year % 4 ==0){
    if(year %100 ==0){
        if(year % 400 == 0){
            console.log("leap Year");
            
        }
        else{
            console.log("Not a leap year");
            
        }
    }
    else{
        console.log("leap year");
        

    }
}
else{
    console.log("not a leap year");
    
}

// Q6
// Check Triangle Validity & type (by Sides)
let tri1 = 70;
let tri2 = 70;
let tri3 = 40;
if((tri1 + tri2 + tri3) === 180){
    if(tri1 === tri2 && tri2 === tri3){
        console.log("valid and Euilateral triangle");
        
    }
    else{
        if(tri1 !== tri2 && tri2 !== tri3){
            console.log("valid and scalene triangle");
            
        }
        else{
            console.log("valid and isosceles triangle");
            
        }
    }
}
else{
    console.log("not a valid triangle");
    
}

// Q7
// Divisible by 2 and 3 
let div = 27;
if(div % 2 == 0 && div % 3 == 0){
    console.log(div,"Divisible by both");
    
}
else{
    if(div % 2 == 0){
        console.log(div,"divisible by 2");
        
    }
    else{
        console.log(div,"divisible by 3");
        
    }
}

// Q8 
// Profit , Loss, or No-Profit
let cp1 = 100 ;
let sp1 = 100;
if(sp1>=cp1){
    if(sp1==cp1){
        console.log("No Profit No Loss");
        
    }
    else{
        console.log("Profit");
        
    }
}
else{
    console.log("Loss");
    
}

// Q9
// Compare two numbers
let m = 12;
let n = 12;
if(m>=n){
    if(m==n){
        console.log("Both Numbers are Equal");
        
    }
    else{
        console.log(m,"is greater number");
        
    }
}
else{
    console.log(n,"is greater number");
    
}
