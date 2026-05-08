
// Q1 Write a program to create an array of five inputs from the user and display the elements of the array.
// let arr = [2,4,6,90,1];
// let n = 5;
// for(let i = 0; i<n ; i++){
//     process.stdout.write(`${arr[i]} `);
    
// }



// Q3 Write a program to create an Array and take input from the user and print their sum. 

// let arr = [2,5,9,10];
// let sum = 0;

// for(let i = 0; i<arr.length; i++){
//     sum = sum + arr[i];
// }
// console.log("sum =",sum);



// Q4  Write a program to create an Array and take input from the user and print the average of the elements.

// let arr = [6,7,3,9,10];
// let sum = 0;

// for(let i = 0; i<arr.length ; i++){
//     sum = sum + arr[i];
  

// }
//   average = sum / arr.length;
// console.log(average);


// Q5  WAP to take input from users in an array and display them in reverse order?

// let arr = [1,7,9,4,8];
// for(let i =(arr.length-1) ; i>=0; i--){
//      process.stdout.write(`${arr[i]} `);
    
// }


// Q6 Write a program to create an Array and take input from the user and print the product of the elements.

// let arr = [1,2,3,4,5];
// let product = 1;
// for(let i = 0; i<arr.length ; i++){
//     product = product * arr[i]
// }
// console.log("Product =",product);



// Q7  Write a program to create an Array and take input from the user and print the average of the sum of odd numbers and average of the sum of even numbers.

// let arr = [4,3,2,10,6];
// let evensum = 0;
// let oddsum = 0;

// let evenarr = [];
// let oddarr = [];

// for(let i = 0 ; i<arr.length ; i++){
//     if(arr[i] % 2 ===0){
//         evenarr[evenarr.length] = arr[i];
//         evensum = evensum + arr[i];
//         averageeven = evensum / evenarr.length

//     }
//     else{
//         oddarr[oddarr.length] = arr[i];
//         oddsum = oddsum + arr[i];
//         average = oddsum / oddarr.length

//     }
// }
// console.log("average of even element =", averageeven);
// console.log("average of Odd element =", average);




// Q8  Write a program to take input from the user for an array,but only allows elements that are 0 or 1. Any other number entered by the user will not be stored in the array.

// let arr = [1,0,8,1,7,1,0,1,2,34,0,1,8,1,1,0,2];
// let result = [];

// for(let i = 0 ; i<arr.length ; i++){
//     if(arr[i]>=0 && arr[i]< 2){
//       result[result.length]= arr[i];
        
//     }
// }
// console.log(result);



// Q9 Write a program to take an array and an index number from the user and print the index value.

// let arr = [8,55,4,2,1];
// let index = 0;

// for(let i = 0; i<arr.length ; i++){
//   if(i === index){
//     console.log(arr[i]);
    
//   }
// }



// Q10  Write a program to create 2 arrays and merge them into a third array.

// let arr1 = [4,9,7,2,11];
// let arr2 = [6,3,8,5];
// let arr3 = [];

// for(let i = 0; i<arr1.length ; i++){
//   arr3[arr3.length] = arr1[i];
// }
// for(let i = 0; i<arr2.length ; i++){
//   arr3[arr3.length] = arr2[i];
// }

// console.log(arr3);



// Q11 Write a program to create an Array and take input from the user and print the sum of even numbers and sum of odd numbers.

// let arr = [2,8,10,1,3];
// let sumeven = 0;
// let sumodd = 0;

// for(let i = 0 ; i<arr.length ; i++){
//   if(arr[i] % 2 == 0){
//     sumeven = sumeven + arr[i];
//   }
//   else{
//     sumodd = sumodd + arr[i]
//   }
// }
// console.log("Sum of Even element =",sumeven);
// console.log("Sum of Odd element =",sumodd);



// Q12  Write a program to take an array from the user and separate the even and odd elements in two different arrays. 

// let arr = [2,5,6,3,8];
// let even = [];
// let odd = [];

// for(let i = 0; i<arr.length ; i++){
//   if(arr[i]%2 ==0){
//     even[even.length] = arr[i];

//   }
//   else{
//     odd[odd.length] = arr[i];
//   }
// }
// console.log("Even =",even);
// console.log("Odd =",odd);



// Q13  Write a program to create an Array and take input from the user and print the largest element and smallest element.

// let arr = [32,89,52,6,10];
// let max = -999999;
// let min = 999999;
3
// for(let i = 0; i<arr.length ; i++){
//   if(max<arr[i]){
//     max = arr[i];
//   }
//   if(min>arr[i]){
//     min = arr[i]
//   }
// }

// console.log("Largest =",max);
// console.log("Smallest =", min);




// Q14  Write a program to find the first repeating element in an array?

// let arr = [2,4,7,2,9,5,1,2];

// for(let i = 0; i < arr.length; i++){
//     let count = 1;

//     for(let j = i + 1; j < arr.length; j++){
//         if(arr[i] == arr[j]){
//             count++;
//         }
//     }
//       console.log(arr[i],"is repeated,",count);
// }
  
    
    
//     // check karo ki ye element pehle aa chuka hai ya nahi
//     let isVisited = false;
//     for(let k = 0; k < i; k++){
//         if(arr[k] == arr[i]){
//             isVisited = true;
//             break;
//         }
//     }

//     if(!isVisited && count > 1){
//         console.log(arr[i], "is repeated", count, "times");
//     }
// }




// Q15 Write a program to take an array and take a number from the user and check if the given number is present in the array or not.

// let arr = [8,9,5,4,0];
// let num = 8;
// let flag = false;

// for(let i = 0; i<arr.length ; i++){
//     if(num===arr[i]){
//         console.log("The given number is present in the array");
//         flag = true;
//         break;
        
//     }
// }

// if(!flag){
//     console.log("the given number is not present in the array.");
    
// }



// Q16  Write a program to reverse the elements of an array.


// let arr = [11,12,13,14,15,26];
// let temp ;

// for(let i = 0; i<arr.length / 2; i++){
//    let j = arr.length-1 - i 
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }

// console.log(arr);




// Q17  Write a program to take an array from the user and arrange the elements in ascending order.

// let arr = [2,9,5,0,3];
// let temp ;

// for(let i = 0; i<arr.length ; i++){
//     for(let j = i+1 ; j<arr.length ; j++){
//         if(arr[i]> arr[j]){
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;

//         }
//     }
// }
// console.log(arr);



// Q18  Write a program to take an array from the user and arrange the elements in descending order.

// let arr = [5,7,2,9,1];
// let temp ;

// for(let i = 0; i<arr.length ; i++){
//     for(let j = i+1 ; j<arr.length ; j++){
//         if(arr[i]<arr[j]){
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);




// Q19  Write a program to delete the given element from the array.

// let arr= [3,7,9,2,4];
// let num = 2;

// for(let i = 0; i<arr.length ; i++){
//     if(num===arr[i]){
//       let newArr = arr.filter(arr[i]);
//       console.log(newArr);
//     }
// }




// LET PRATICE 

// Q  We are given array of marks of students. filter out of the marks of students taht scored 90+.

// let marks = [87,98,76,91,98,34,65,34,90];

// let result = marks.filter((value)=>{
//     return value > 90;
// })
// console.log(result);



// let n = [1,2,3,4];

// let arr = [];

// for(let i = 0; i<n ; i++){
//   arr[i] = i
// }

// console.log(arr);





// Q  Use the reduce method to calculate sum of all numbers in the array.

// let arr = [1,2,3,4];

// let result = arr.reduce((sum,value) =>(sum + value));
// console.log(result);



// Q  Use the reduce method to calculate product of all numbers in the array.

// let arr = [1,2,3,4,5];

// let result = arr.reduce((fact , value)=> (fact * value),1)
// console.log(result);







