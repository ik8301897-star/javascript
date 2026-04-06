
// // Practice Set JavaScript Operators

// //Q1 Write a JavaScript program to input two numbers and print their sum.

let num = 6;
let num1 = 8;
let sum = num + num1;
console.log(sum);

// // // Q2 Write a Program to subtract the second number from the first .

let sub = 10;
let sub1 = 5;
let diff = sub - sub1;
console.log(diff);

// // //Q3 Write a program to multiply two numbers.
let mul = 6;
let mul1 = 8;
let multiply = mul * mul1;
console.log(multiply);

// // // Q4 Write a program to divide the first number by the second. 
 let div = 30;
 let div1 = 5;
 let divide = div / div1;
 console.log(divide);

// //  //Q5 Write a program to find the remainder of division.
 let rem = 19;
 let rem1 = 3;
 let remainder = rem % rem1;
 console.log(remainder);

// //  // Q6 Write a program to calculate power using ** 

 let exp = 2;
 let exp1 = 3;
 let exponent = exp ** exp1;
 console.log(exponent);


//  // 2) Assignment Operators

//  //Q8 Assign a number to a variable and print it.
 let a = 10;
 a = 10;
 console.log("a =",a);

//  //Q9 Add 10 to a number using += .
 let b = 20;
 b += 10;
 console.log("b =", b);

//  // Q10 Subtract 5 using -=.

 let sub2 = 20;
 sub2 -= 5;
 console.log("sub =",sub2);

//  // Q11 Multiply a number by 2.
 let mul2 = 8;
 mul2 *= 3;
 console.log("multiply =",mul2);

//  // Q12 Divide a number by 4.
 let div2 = 40;
 div2 /= 4;
 console.log("divide =",div2);

//  // Q13 Find remainder using %=
 let mod = 19;
 mod %= 2;
 console.log("modulus =",mod);

//  // Q14 Use exponent assignment. 
 let exp2 = 4;
 exp2 **= 2;
 console.log("exponent =",exp2);


// SECTION 1 : Unary Operators (Increment / Decrement)

// Q1 
// input 5 , Write a program to demonstrate post-increment

 let inc = 5;
 console.log("inc =", inc); // before
 inc++;
 console.log("inc =",inc); // after

//  //Q2
//  // Input : 10  , Write a program to demonstrate pre decrement 

 let dre = 10;
 console.log("dre =", dre); // before
 --dre;
 console.log("dre =", dre); //after

//  // Q3
//  // Input: 5   , demonstrate the difference between  x++ ++x
 let dem = 5;
let dem1 = 5;
console.log("dem1 =",++dem1);

// Q4 
let integer = 10;
console.log("integer =", integer++); // post increment
integer = 10;
console.log("integer =", ++integer); // pre increment
integer = 10;
console.log("integer =", integer--); // post decrement
integer = 10;
console.log("integer =", --integer); // pre decrement

let bigint = 100000n;
console.log("bigint =", bigint++); // post increment
bigint = 100000n;
console.log("bigint =", ++bigint); // pre increment
bigint = 100000n;
console.log("bigint =", bigint--); //  post decrement
bigint = 100000n;
console.log("bigint =", --bigint); //  pre decrement

let float = 2.5;
console.log("float =", float++); // post increment
float = 2.5;
console.log("float =", ++float);  // pre increment
float = 2.5;
console.log("float =", float--); // post decrement
float = 2.5;
console.log("float =", --float);   //  pre decrement

// Q5
// Input : x = 5     , write a program to print value of x after each operation.

let x = 5;
console.log("x =", x++);   // 5  // post increment
console.log("x =", x); // 6
x = 5;
console.log("x =", ++x); // 6     pre increment

x = 5;
console.log("x =", x--); // 5  post decrement

x = 5;
console.log("x =", --x); // 4  pre decrement


// Q6
let y = 8;
let result = y++ + ++y + --y + y--;
console.log("result =", result);
console.log(y);


// Q7 

let z = 10;
console.log(z++); // 10
console.log(++z); // 12
console.log(z--); // 12
console.log(--z); // 10

// SECTION 2: COMPARISON OPERATORS BASICS
// Q8 
let ch = 6;
let che = "6";
console.log(ch == che); // true == baas value check karta hai
console.log(ch === che); // false   ku ki === data types aur value dono check karta hai 

//Q9
let com = 10;
let comp = 23;
console.log(com > comp);  // false
console.log(com < comp); // true
console.log(com == comp); // false   

// Q10 
let equal = 23;
let equal1 = "23";
console.log(equal != equal1);    // false because of using single = 
console.log(equal !== equal1);    // true

// Q11 
let i = 10;
let j = 20;
console.log(i == j); // false
console.log(i != j); // true
console.log(i < j);  // true
console.log(i > j);  // false
console.log(i <= j); // true
console.log(i >= j);  // false

// SECTION 3 DATA TYPE COMPARSIONS 
// Q12
let big = 100000n;
let bigs = 100000n;
console.log(big == bigs);  // true
console.log(big === bigs); // true
console.log(big != bigs); // false
console.log(big !== bigs); // false
console.log(big > bigs); // false
console.log(big < bigs); // false
console.log(big >= bigs); // true
console.log(big <= bigs);  // true


// Q13
let fl = 5.5;
let flo = 3.3;
console.log(fl ==flo); // false
console.log(fl ===flo); // false
console.log(fl !=flo); // true
console.log(fl !==flo); // true
console.log(fl >flo); // true
console.log(fl <flo); // false
console.log(fl >=flo); // true
console.log(fl <=flo);  // false

// Q14
let same = 100.25;
let sames = 100.25;
console.log(same == sames); // true
console.log(same === sames);  // true
console.log(same != sames);  // false
console.log(same !== sames); // false
console.log(same > sames);  // false
console.log(same < sames);  // false
console.log(same >= sames); // true
console.log(same <= sames);  // true

// Q15
console.log(true == false);   //false
console.log(true === false);  // false
console.log(true != false);  // true
console.log(true !== false);  // true
console.log(true > false);  // true
console.log(true < false);   // false
console.log(true >= false);  // true
console.log(true <= false);   // false

// Q16
let fruit = "apple";
let fruits = "banana";
console.log(fruit == fruits);  // false
console.log(fruit === fruits);  // false
console.log(fruit != fruits);   // true
console.log(fruit !== fruits);  // true
console.log(fruit > fruits);   // false
console.log(fruit < fruits);  // true
console.log(fruit >= fruits);  // false
console.log(fruit <= fruits);  // true

// SECTION 4 
//LOSSE VS STRICT EQUALITY
// Q17
let str = "5";
let no = 5;
console.log(str == no);  // true
console.log(str === no); // false

// Q18
let p = 5;
let q = "5";
let r = 10;
console.log(p == q);  // true
console.log(p === q); // false
console.log(p < r); // true
console.log(r >= q); // true

// Q19
console.log(null == undefined); // true
console.log(null === undefined);  // false

// Q20
let boo = true;
let bool = 1;
console.log(boo == bool);  // true
console.log(boo === bool);   // false

let fal = false;
let fals = 0;
console.log(fal == fals); // true
console.log(fal === fals);  // false


// SECTION 5 : TRICKY

// Q21
let tri = 5;
console.log(tri++ + ++tri); // 12


// Q22 
let tas = 5;
let task = 10;
console.log(tas++ < ++task);  // true
console.log(--tas == task++);  // false
console.log(tas >= task); // false

// Q23
let last = "10";
let lasts = 2;
console.log(last > lasts);  // true
console.log(last < lasts);  // false


















































































