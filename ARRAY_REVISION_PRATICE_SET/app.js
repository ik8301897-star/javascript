

// Q1  Write a program to create an array to five inputs from the user and display the elements of the array.

// let arr = [2,3,4,5,6];

// arr.forEach((arr)=>{
//     console.log(arr);
    
// })



// Q2 Write a program to create an Array and take input from the user and print the sum.

// let arr = [1,2,3,4,5];
// let sum = 0;

// for(let i = 0; i<arr.length; i++){
//     sum = sum + arr[i];

// }
// console.log(sum);



// Q3 Write a program to create an array and take input from the user and print the average of the elements.

// let arr = [6,7,3,9,10];
// let sum = 0;

// for(let i = 0; i<arr.length; i++){
//     sum = sum + arr[i]
// }
// let average = sum / arr.length;
// console.log("average of the elements =", average);



// Q4  WAP to take input from users in an array and display them in reverse order?

// let arr = [1,7,9,4,8];

// for(let i = arr.length-1 ; i>=0 ; i--){
//     process.stdout.write(`${arr[i]}`)
// }





// Q5  Write a program to create an array and take input from the user and print the product of the elements.

// let arr = [1,2,3,4,5];
// let product = 1;

// for(let i = 0; i<arr.length; i++){
//     product = product * arr[i];
// }
// console.log("Product =",product);



// Q6  Write a program to create an Array and take input from the user and print the average of the sum of odd numbers and average o the sum of even numbers.

// let arr = [4,3,2,5,6];

// let sumEven = 0;
// let sumOdd = 0;
// let evenArr = [];
// let oddArr = [];


// for(let i = 0; i<arr.length ; i++){
//     if(arr[i] % 2 ===0){
//         evenArr[evenArr.length] = arr[i];

//         sumEven = sumEven + arr[i];
//         averageEven = sumEven / evenArr.length
//     }
//     else{
//         oddArr[oddArr.length] = arr[i];
//         sumOdd = sumOdd + arr[i];
//          averageOdd = sumOdd / oddArr.length;
//     }
// }

// console.log("Average of odd element", averageOdd);
// console.log("Average of even element =",averageEven);





// Q7  Write a program to take input from the user for an array, but only allows elements that are 0 or 1. Any other number entered by the user will not be stored in the array.


// let arr = [9,0,3,1,8,1,0,2,3,1];
// let result = [];

// for(let i = 0; i<arr.length; i++){
//     if(arr[i]===0 || arr[i]=== 1){
//        result[result.length] = arr[i];

    
      
        
//     }
// }
// console.log(result);



// Q8 Write a program to take an array and an index number from the user and prin the index value.

// let arr = [8,55,4,2,1];
// let indexno = Number(prompt("Enter a index Number"));

// for(let i = 0; i<arr.length ; i++){
//     if(i === indexno){
//         console.log(arr[i]);
        
//     }
// }




// Q9  Write a program to create 2 arrays and merge them into a third array.

// let arr1 = [4,9,7,2,11];
// let arr2 = [6,3,8,5];
// let arr3 = [];

// for(let i = 0; i<arr1.length; i++){
//     arr3[arr3.length] = arr1[i];
// }
// for(let i = 0; i<arr2.length; i++){
//     arr3[arr3.length] = arr2[i];
// }
// console.log(arr3);



// Q10 Write a program to create an array and take input from the user and print the sum of even numbers and sum of odd numbers.

// let arr = [2,8,10,1,3];
// let sumEven = 0;
// let sumOdd = 0;
// let evenArr = [];
// let oddArr = [];

// for(let i = 0; i<arr.length; i++){
//     if(arr[i] % 2 ===0){
//         evenArr[evenArr.length] = arr[i];
//         sumEven = sumEven + arr[i];
//     }
//     else{
//         oddArr[oddArr.length] = arr[i];
//         sumOdd = sumOdd + arr[i];
//     }
// }
// console.log("Even =",sumEven);
// console.log("Odd =",sumOdd);





// Q11 Write a program to take an array from the user and separate the even and odd elements in two different arrays.

// let arr = [2,5,6,3,8];
// let evenArr =[];
// let oddArr =[];

// for(let i = 0; i<arr.length;i++){
//     if(arr[i] % 2===0){
//         evenArr[evenArr.length] = arr[i];
//     }
//     else{
//         oddArr[oddArr.length] = arr[i];
//     }
// }
// console.log(evenArr);
// console.log(oddArr);







// Q12 Write a program to create an array and take input from the user and print the largest element and smallest element.

let arr = [32,89,52,6,10];
let max = -999999;
let min = 99999;

for(let i = 0; i<arr.length; i++){
    if(max<arr[i]){
        max = arr[i];
    }
    if(min>arr[i]){
        min = arr[i]
    }
}
console.log("largest =",max);
console.log("Smallest =",min);

