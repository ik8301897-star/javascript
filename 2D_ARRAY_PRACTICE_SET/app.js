

// Q1 Write a program to take no.of row and column from user and input elements and print the matrix.

let arr = [9,3,6,1,3,8];
let row = 2; 
let column = 3;
let maxtrix = [];
let index = 0;

for(let i = 0; i<row;i++){
    maxtrix[i] = [];

    for(let j = 0; j<column; j++){
        maxtrix[i][j] = arr[index];
        index++
    }
}
console.log(maxtrix);
