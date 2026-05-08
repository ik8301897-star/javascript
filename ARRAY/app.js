


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

// let arr = [33,23,45,21,12];

// for(i=arr.length-1 ; i>=0 ; i--){
//   console.log(arr[i]);
  
// }
// // console.log(arr[i]);




// MODERN LOOPS :-   reduce();

// let arr = [334,23,2,3];

// let total = arr.reduce((sum,arr)=>sum + arr,0);
// console.log(total);


// let arr = [2,4,6];
// let factorial = arr.reduce((fact,arr)=>fact * arr,1);
// console.log("Factorial =",factorial);


// let arr = [2,4,6];
// let fact = 1;

// for(let i = 0; i<arr.length; i++){
//   fact = fact * arr[i];
// }
// console.log("factorial =",fact);



// MODERN LOOP :-  filter();



// greater than 20
// let arr = [83,38,93,1,2,3,938,83];
// let newarr = arr.filter((arr)=>(arr>20))
// console.log(newarr);


// even number 

// let arr = [3,9,86,23,28,34,87,98];
// let even = arr.filter((arr)=>(arr% 2 ==0))
// console.log("Even Number =",even);


//  odd number

// let arr = [2,5,7,98,736,53,23,25,26,64];
// let odd = arr.filter((arr)=>(arr % 2 ==1));
// console.log("Odd number =",odd);


// let arr = [33,43,45,43,12,3,4];
// let newarr = arr.filter((arr)=>(arr % 2 ==0));
// console.log("Even Number =",newarr);


// let arr = [34,32,11,21,23,45,98,4];
// let even =[];
// let odd =[];

// for(let i = 0; i<arr.length; i++){
//   if(arr[i] % 2 ==0){
//     even[even.length] = arr[i];
//   }
//   else{
//     odd[odd.length] = arr[i]
//   }
// }
// console.log("Even Number",even);
// console.log("Odd Number:",odd);






// let name = ["Ishu","Virat","Rohit","Travis"]

// for(let i = 0;i<name.length ; i++){
//     console.log("Name =",name[i]);
    
// }


// let student = ["Ishu","Virat","Rohit", "Dhoni"];

// for(let stu of student){
//     console.log("Student =",stu);
    
// }


// let marks = [85,97,44,37,76,60];
// let sum = 0;
// let average = 0;

// for(let i = 0; i<marks.length ; i++){
//     sum = sum + marks[i];
//     average = sum / marks.length

   

// }

//  console.log("average =",average);




// let items = [250,645,300,900,50];

// for(let i = 0; i<items.length ; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
//     console.log(i,items[i]);




// let n = prompt("enter a number")

// let arr = [];

// for(let i = 0; i<n ; i++){
//     arr[i] = i
// }
// console.log(arr);


let arr = [1,2,3,99,383,833,4];

let result = arr.reduce((sum,value) =>{
    return sum > value ? sum : value
})


console.log(result);





    




















 






 

