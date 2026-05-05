


// let arr = [22,33,44,55];
// console.log("array =",arr);
//


// let arr = new Array(11,22,33,44,55);
// console.log(arr);
//  console.log("type =", typeof(arr));

//  let names = ["Ishu kumar", "Virat Kohli","Rohit Sharma"];
//  console.log(names);

// let data = ["Ishu Kumar", 99.80 , 24, true];
// console.log(data[0]);

// data[0]= "ishu";
// console.log(data[0]);



// let arr = [1,2,3,4,5,6,7];
// console.log("length =", arr.length);

// for(i = 0 ; i<arr.length ; i++){
//     console.log(i,"=",arr[i]);
    
// }\




// let arr = [1,2,3,4,5];
// console.log("arr =",arr);
// for(let i = 0 ; i<arr.length ; i++){
//     arr[i] = arr[i] *arr[i];
// }
// console.log("square =",arr);




// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });3

// let arr = [];
// let count = 0;

// function takeInput() {
//     if (count === 5) {
//         console.log("Array elements are:", arr);
//         rl.close();
//         return;
//     }

//     rl.question(`Enter element ${count + 1}: `, (input) => {
//         arr.push(input); // store input in array
//         count++;
//         takeInput(); // call again for next input
//     });
// }

// takeInput();


// let arr = [];
// let n = Number(prompt("kitne element dalne hai?"));
// for(let i = 0; i<n ; i++){
//     arr[i] = Number(prompt("Enter value:"));

// }
// console.log(arr);

// Q1  Write a program to create an array of five inputs from the user and display the elements of the array. 
// let arr = [];
// let n = Number(prompt("How many input ?"));

// for(let i = 0 ; i<n ; i++){
//     arr[i] = Number(prompt("Enter a number:"));

// }
// console.log(arr);


// Q3 Write a program to create an Array and take input from the user and print their sum.
// let arr = [2,5,9,10];
//  let sum = 0;

//  for(let i = 0; i<arr.length ; i++){
//     sum = sum + arr[i];
//  }
//  console.log("sum =",sum);


// Q4  Write a program to create and Array and take input from the user and print the average of the elements.

// let arr = [6,7,3,9,10];
// let sum = 0;

// for(let i = 0 ; i<arr.length ; i++){
//     sum = sum + arr[i];
//     average = sum / arr.length
    
// }
// console.log(average);


// Q5 WAP to take input from user in an array and display them in reverse order?

// let arr = [1,7,9,4,8];

//  reverse =arr.pop();
//  console.log(reverse);
 



// let numbers = [1,2,3,4,5,6,7,8,9];
//  let evencount = 0;
//  let oddcount = 0;

//  for(let i = 0; i<numbers.length ; i++){
//     if(numbers[i] % 2 ==0){
//         evencount++
//     }
//     else{
//         oddcount++
//     }

//  }

//  console.log("Evencount =", evencount);
//  console.log("Oddcount =",oddcount);
 



//  AARAY ODD/EVEN QUESTION      

// let arr = [11,22,8,3,87,33,45,98,76];

// let evenarr = [];
// let oddarr = [];

// for(let i = 0; i<arr.length ; i++){
//    if(arr[i] % 2 == 0){
//       evenarr[evenarr.length] = arr[i];
//    }
//    else{
//       oddarr[oddarr.length] = arr[i];
//    }
// }

// console.log("Even :", evenarr);
// console.log("Odd :", oddarr);






//  ARRAY MERGE QUESTION   

// let arr1 = [33,22,44];
// let arr2 = [323,98,32];
//  let arr3 = [];

//  for(let i = 0 ; i<arr1.length ; i++){
//    arr3[arr3.length]= arr1[i];
//  }
//  for(let i = 0 ; i<arr2.length ; i++){
//    arr3[arr3.length] = arr2[i]
//  }

//  console.log("arr3 =", arr3);
 


// ARRAY MIN/MAX 


// let arr = [22,33,43,12,34,99,938389];
// let max = -9999999;

// for(let i = 0; i<arr.length ; i++){
//   if(max< arr[i]){
//     max = arr[i]
//   }
// }
// console.log(max);


// let arr = [22,38,8,930,937,21];
// let min= 999999;

// for(let i = 0; i<arr.length ; i++){ 
//   if(min>arr[i]){
//     min = arr[i]
//   }
// }
// console.log(min);



// REVERSE ARRAY

let arr = [33,23,45,21,12];

for(i=arr.length-1 ; i>=0 ; i--){
  console.log(arr[i]);
  
}
// console.log(arr[i]);








 






 

