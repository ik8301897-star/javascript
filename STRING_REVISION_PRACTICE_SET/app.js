

// Q1. Write a JavaScript program to input a string from the user and print it.

// let str = "Coding Age";

// console.log(str);




// Q2 Write a JavaScript program to print each character of a string in forward order.

// let str = "JavaScript";

// for(let i = 0; i<str.length;i++){
//    process.stdout.write(`${str[i]} ,`)
 
   
     
// }




// Q3. Write a JavaScript program to print each character of a string in reverse order.

// let str = "CodingAge";

// for(let i = str.length -1; i>=0; i--){
//     process.stdout.write(`${str[i]} `)
// }




//  Q4. Write a JavaScript program to count the total number of characters in a string.

// let str = "Hello World";
// console.log("Total number of characters =",str.length);



// Q5  Q5. Write a JavaScript program to count vowels and consonants in a string. 


// let str = "Education";
// let vowel = 0;
// let consonant = 0;

// for(let i = 0; i<str.length; i++){
//     if(str[i] == "A"|| str[i] == "a"|| str[i] == "E"|| str[i] == "e"|| str[i] == "I"|| str[i] == "i"|| str[i] == "O"|| str[i] == "o"|| str[i] == "U"|| str[i] == "u"){
//         vowel++
//     }
//     else{
//         consonant++
//     }
    
// }
// console.log("Vowerls =",vowel);
// console.log("Consonant =",consonant);




// Q6  Write a JavaScript program to find duplicate characters in a string.


// let str = "Programming";
// let duplicate = "";

// for(let i = 0; i < str.length; i++){

//     let count = 0;

//     for(let j = 0; j < str.length; j++){

//         if(str[i] == str[j]){
//             count++;
//         }
//     }

//     // duplicate character check
//     if(count > 1){

//         // same character baar baar print na ho
//         if(!duplicate.includes(str[i])){
//             duplicate += str[i] + " ";
//         }
//     }
// }

// console.log("Repeated characters are :", duplicate);





// Q7 Q7. Write a JavaScript program to separate all characters from a string.

// let str = "frontend";

// for(let i = 0; i<str.length;i++){
//     console.log(str[i]);
    
// }




//
// Q8. Write a JavaScript program to find the length of a string using:
// User-defined method

// Predefined property (length)

//   USER-DEFINED ---------

// let str = "JavaScript";
// let count = 0;

// for(let i = 0; i<str.length; i++){
//     count++
// }
// console.log(count);

// PRE-DEFINED PROPERTY -------

let str = "JavaScript";
console.log(str.length);

