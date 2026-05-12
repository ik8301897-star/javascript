

// Q1. Write a JavaScript program to input a string from the user and print it.

// let str = "Coding Age";
// console.log(str);
// console.log(typeof(str));



// Q2   Write a JavaScript program to print each character of a string in forward order.

// let str = "JavaScript";

// for(let i = 0; i<str.length; i++){
//     // process.stdout.write(`${str[i]} `)
//     console.log(str[i]);
    
// }



// Q3 Write a JavaScript program to print each character of a string in reverse order.

// let str = "Coding Age";

// for(let i = str.length-1; i>=0 ; i--){
//     console.log("index =",i,str[i]);
//     process.stdout.write(`${str[i]} `);
// }



// Q4  Write a JavaScript program to count the total number of characters in a string.

// let str = "Hello World";

// console.log("Total number of characters =",str.length);



// Q5 Write a JavaScript program to count vowels and consonants in a string.

// let str = "Education";
// let vowel = 0;
// let consonants = 0;


// for(let i = 0; i<str.length; i++){
//     if(str[i]=== "A" || str[i]==="a" || str[i]=== "E" ||str[i]=== "e" || str[i]=== "I"|| str[i]=== "i"|| str[i]=== "O"|| str[i]=== "o"|| str[i]=== "U"|| str[i]=== "u"){
        
//         vowel++
//     }
//     else{
//         consonants++
//     }
 
// }
// console.log("Number of Vowels =", vowel);
// console.log("Number of consonants =",consonants);





// Q6. Write a JavaScript program to find duplicate characters in a string.

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


// Q7  Write a JavaScript program to separate all characters from a string

// let str = "frontend";

// for(let i = 0; i<str.length; i++){
//     console.log(str[i]);
    
// }



// Q8  Write a JavaScript program to find the length of a string using:
// User-defined method

// Predefined property (length)

// let str = "JavaScript";
// let count = 0;

// for(let i = 0; i<str.length; i++){
//     count++
// }
// console.log("Length using user-defined method =",count);

// console.log("Length using predefined property =", str.length);




// Q9. Write a JavaScript program to count alphabets, digits, and special characters in a string.

// let str = "coding123@gmail.com";
// // let alphabetscount = 0;
// // let digitcount = 0;
// // let special = 0;


// // for(let i = 0; i<str.length; i++){
// //     let ch = str[i];
// //     if(str[i]=="0" || str[i]=="1" || str[i]=="2" || str[i]=="3" || str[i]=="4" || str[i]=="5" || str[i]=="6" || str[i]=="7" || str[i]=="8" || str[i]=="9"){
// //          digitcount++

// //     }
// //    else if((ch >= 'A' && ch <= 'Z') ||
// //         (ch >= 'a' && ch <= 'z')){
// //             alphabetscount++
// //         }
// //         else{
// //             special++
// //         }

// // }
// // console.log(alphabetscount);
// // console.log(digitcount);
// // console.log(special);


// Q10   Q10. Write a JavaScript program to concatenate two strings using:
// User-defined method

// Predefined method (concat())

// USERDEFINED ------
// let str = "Coding";
// let str1 = "Age";
// let str2 = "";

// // for(let i = 0; i<str.length; i++){
// //     str2 = str2 + str[i];
// // }
// // for(let i = 0; i<str1.length; i++){
// //    str2 = str2 + str1[i];
// // }
// // console.log(str2);


// PREDEFINED ------

// let str = "Coding";
// let str1 = "Age"
// let str2 = str.concat(str1);
// console.log(str2);




// Q11 Q11. Write a JavaScript program to copy one string into another string using:
// User-defined method

// Predefined method


// let str1 = "JavaScript";
// let str2 = "";

// for(let i = 0; i<str1.length; i++){
//     str2 = str2 + str1[i];
// }
// console.log(str2);




//  Q12. Write a JavaScript program to count how many times the word "the" appears in a string.

// let str = " The boy went to the market and the shop";
// let count = 0;
// let arr = str.split(" ");

// for(let i = 0; i<arr.length; i++){
//     if(arr[i]=="The"|| arr[i]=="the"){
//         count++;
//     }
// }
// console.log("'the' appears :",count,"times");



// Q13   Q13. Write a JavaScript program to split a sentence into words using:
// User-defined method

// Predefined method (split())


// USERDEFINED ----------

// let str = "JavaScript is awesome";
// let arr = str.split(" ");

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
    
// }




// Q14   Q14. Write a JavaScript program to convert all characters to uppercase using:
// User-defined method

// Predefined method (toUpperCase());

// USER-DEFINED --------

// let str = "Hello World";
// let str1 = "";

// for(let i = 0; i<str.length; i++){
//     str1 = str.toUpperCase(str)
// }
// console.log(str1);


// PRE-DEFINED ------

// let str = "Hello World";
// let str1 = str.toUpperCase(str);
// console.log(str1);




// Q15   Q15. Write a JavaScript program to convert all characters to lowercase using:
// User-defined method

// Predefined method (toLowerCase());

// USER-DEFINED -----

// let str = "HELLO WORLD";
// let str1 = "";

// for(let i = 0; i<str.length; i++){
//     str1 = str.toLowerCase(str)
// }
// console.log(str1);


// PRE-DEFINED -------

// let str = "HELLO WORLD";

// let str1 = str.toLowerCase(str);
// console.log(str1);




// Q16  Q16. Write a JavaScript program to remove all spaces from a string using:
// User-defined method

// Predefined method (replaceAll() / replace())

// PRE-DEFINED -------

// let str = "He llo Wo rld";
// let newstr = str.replaceAll(" ","");

// console.log(newstr);


// USER-DEFINED -------

// let str = "He llo Wo rld";
// let newstr = "";
// for(let i = 0; i<str.length; i++){
//     if(str[i]!= " "){
//         newstr =newstr + str[i];
//     }
// }
// console.log(newstr);




// Q17   Write a JavaScript program to toggle the case of each character in a string.

// let str = "This Is JavaScript";
// let str1 = "";

// for(let i = 0; i<str.length; i++){
//     if(str[i].toLowerCase()){
//        str1 = str[i].toUpperCase(str)
//     }
//     else{
//        str1 = str[].toLowerCase(str)

//     }
// }
// console.log(str1);




// Q18 Write a JavaScript program to count the frequency of each character in a string.

// let str = "hello";
// let count = 0;

// for(let i = 0; i<str.length; i++){
//   for(let j = i+1; j<str[i].length; j++){


//   }
    

// }





// Q20  Write a javascript program to reverse a complete string using.

// let str = "JavaScript";

// for(let i = str.length-1; i>=0; i--){
   
//     process.stdout.write(`${str[i]}`)
// }




