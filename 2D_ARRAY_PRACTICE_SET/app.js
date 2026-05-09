

// Q1 Write a program to take no.of row and column from user and input elements and print the matrix.

// let arr = [[9 , 3 , 6] , [1 , 3 , 8] ];

// for(let i = 0; i<arr.length; i++){
//     for(let j = 0; j<arr[i].length; j++){
//         process.stdout.write(`${arr[i][j]} `)
//     }
//     console.log();
 
// }




// Q2 Write a program to take input in a 2D array and find the sum of elements.

// let arr = [[2,5,8],[9,1,4]];
// let sum =0;


// for(let i = 0; i<arr.length; i++){
//     for(let j = 0; j<arr[i].length;j++){
//         sum = sum + arr[i][j];
//     }

// }
// console.log(sum);





// Q3   Write a program to take input in a 2d array and find the product of elements.

// let arr = [[1,2,3],[6,5,4]];
// let product = 1;

// for(let i = 0; i<arr.length ; i++){
//     for(let j = 0; j<arr[i].length; j++){
//         product = product * arr[i][j];


//     }
// }
// console.log("Product =",product);





// Q4  Write a program to check if the given two matrix are equal or not.

// let arr1 = [[3,2],[1,5]];
// let arr2 =  [[3,2],[1,5]];

// let isEqual = true;

// for(let i = 0;i<arr1.length; i++){
//     for(let j = 0; j<arr1[i].length; j++){
//         if(arr1[i][j] !== arr2[i][j]){
//             isEqual = false;
//         }
//     }
// }
// if(isEqual){
//     console.log("both matrix are equal");
    
// }
// else{
//      console.log("both matrix are not equal");
// }






// Q5   Write a program to find the maximum and minimum element present in the matrix.

// let arr = [[4,5,18],[3,15,6],[2,1,10]];

// let max = arr[0][0];
// let min = arr[0][0];

// for(let i = 0; i<arr.length;i++){
//     for(let j = 0;j<arr[i].length;j++){
//         if(arr[i][j]>max){
//             max = arr[i][j];
//         }
//         if(arr[i][j]<min){
//             min = arr[i][j];
//         }
//     }
// }
// console.log("max =",max);
// console.log("Min=",min);





// Q6  Write a program to take input in a 2d array and check whether the given number is present in the matrix or not. 

// let arr = [[1,3],[6,4]];

// let num = 4;
// let flag = false;


// for(let i = 0; i<arr.length; i++){
//     for(let j = 0; j<arr[i].length; j++){
//         if(num ===arr[i][j]){
           
//            flag = true;
            
//         }
       
//     }
    
// }
// if(flag){
//     console.log("The number is the present in the array");
    
// }
// else{
//   console.log(  "The number is not present in the array");
  
// }







// Q7  Write a program to add two matrix together. 

let arr = [[6,9],[3,9]];

let sum = 0;
let sums = 0;

for(let i = 0; i<arr.length-1;i++){
    for(let j = 0; j<arr[i].length; j++){
        sum = sum + arr[i][j];
    }

    for(let i = 1; i<arr.length;i++){
    for(let j = 0; j<arr[i].length; j++){
        sums = sums + arr[i][j];
    }
  
}
  
}

console.log(sum,sums);





