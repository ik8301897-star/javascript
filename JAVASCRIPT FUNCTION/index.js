


// function myFunction(){
//     console.log("Hello Coding Age");
//     console.log("Hello everyone");
    
    
// }
// myFunction();



// function msg (a,b){
//    console.log( a + b);
   
    
// }
// msg(10,5);



// Sum of two numbers 

// function sum(a,b){
//     console.log(a + b);
    
// }
// sum(34,89);



// function sum(a,b){   // parameters jo hote hai to local variable ke tarah act karte hai uske bahar call nhi hoga blocked scoped hota hai
//     return a + b;
// }
// let result = sum(12,12);
// console.log(result);


// let sum = (a,b)=>{
//     return a +b

// }
// let result = sum(23,23);
// console.log(result);


// let mul = (a,b) =>{
//     return a * b;
// }
// let result = mul(4,4);
// console.log(result);




// practice question: Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string.

function vowelCount(str){
    let count = 0;
    for(const char of str){
      if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        count++
      }
        
    }
    return count;

}

let vowel = vowelCount("coding age");
console.log(vowel);





