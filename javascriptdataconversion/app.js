//Q1 Write a program to convert a number into a string.
let num = 100;
let str = String(num);
console.log("str:", str);
console.log(typeof(str));

//Q2 Write a program to convert a boolean into a string
let value = true;
let bool = String(value)
 console.log("bool:", bool);
 console.log(typeof(bool));

 //Q3 Write a program to convert a number using .toString().
let nums = 200;
let strs = nums.toString()
console.log(strs);
console.log(typeof(strs));

// Q4 Write a program to convert string into number.
let strs1 = "50";
let nums1 = Number(strs1);
console.log(nums1);
console.log(typeof(nums1));

// Q5 Write a program to convert string into decimal number.
let strs2 = "42.75";
let deci = parseFloat(strs2);
console.log(deci);
console.log(typeof(deci));

//Q6 Write a program to convert string into integer.
let strs3 = "10.75";
let int = parseInt(strs3);
console.log(int);
console.log(typeof(int));

//Q7 Write a program to convert string to number using unary operator.
let str4 = +"25";
console.log(str4);
console.log(typeof(str4));

//Q8 Write a program to convert different values into boolean.
let a = 1;
let bool1 = Boolean(a);
console.log(bool1);
console.log(typeof(bool1));

let b = 0;
let bool2 = Boolean(b);
console.log(bool2);
console.log(typeof(bool2));

let c = "Hello";
let bool3 = Boolean(c);
console.log(bool3);
console.log(typeof(bool3));

let d = "";
let bool4 = Boolean(d);
console.log(bool4);
console.log(typeof(bool4));


// let e = "hello";
// console.log(Boolean(e));
// console.log(typeof(e));

// Q9 Write a program to check type coercion with addition.
let result = "5"+ 3;
console.log(result);
console.log(typeof(result));
//explain:  string + number = string
// Number string me convert ho gya
// + operator string ko prefer karta hai.

// Q10 Write a program to check type of coercion with subtraction.
let result1 = "5" - 2;
console.log(result1);
console.log(typeof(result1));
//explain: Minus operator number expect karta hai 
// Isliye string "5" number me convert ho gaya

//Q11 Wrtie a program to convert string with text into number.
let str11 = "10px";
let int1 = parseInt(str11);
console.log(int1);
console.log(typeof(int1));

// Q12 Write a program to check invailed number conversion.
let str12 = "abc";
let nums4 = Number(str12);
console.log(nums4);
console.log(typeof(nums4));
// doubt : jab iska output NaN aa raha hai to iska type of number kaise aa raha hai.


// Q13  Write a program to check truthy and falsy values. 
let a1 = 0;
console.log(Boolean(a1));
let b1 = "0";
console.log(Boolean(b1));
let c1 = null;
console.log(Boolean(c1));
let d1 = [];
console.log(Boolean(d1));


// Q14 Write a program to compare Number( ) and parseInt().

let str14 = "15px";
let num14 = Number(str14);
console.log(num14);
console.log(typeof(num14)); // pure number hi accept karta hai aagr text ya extra character hua NaN dega.

let int14 = "15px";
let int15 = parseInt(int14);
console.log(int15); // Starting ka number read karta hai jaha text start hua waha stop ho jata hai. 

// Q15 Write a program to convert empty string into number.
let str15 = "";
let num15 = Number(str15);
console.log(num15);
console.log(typeof(num15));

// Q16 Write a program to check boolean conversion of different values. 
console.log(Boolean(undefined));  // Undefined matlb value exist hi nahi karti hai. javascript me ye falsy 
// value hai isliye result false aaya hai 
console.log(Boolean(NaN)); // NaN ye v javaScript ka falsy values me aata hai .
console.log(Boolean("false")); // false ek string hai boolean nahi isliye ye true aaya non-empty string
// always true hote hai.

// Q17 Write a program to convert multiple values and print type.
let a17 = "25";
let num17 = Number(a17);
console.log(num17);
console.log(typeof(num17));

let b17 = true;
let str17 = String(b17);
console.log(str17);
console.log(typeof(str17));

let c17 = null;
let num18 = Number(c17)
console.log(num18);
console.log(typeof(num18));

// Q18 Write a function to clean numeric value from string.
let weight = "100kg";
let parse = parseInt(weight);
console.log(parse);



























 
 

