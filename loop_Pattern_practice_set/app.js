

// Q1  ***
//     ***
//     ***

// let num = 3;
// for(let i = 1;i<=num;i++){
//     for(let j = 1; j<=num;j++){
//         process.stdout.write("* ")
//     }
//    process.stdout.write("\n");
// }


// Q2  *
//     **
//     ***

// let num = 3;
// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=i;j++){
//         process.stdout.write("* ")
//     }
//       process.stdout.write("\n")
// }


// Q3  ***
//     **
//     *

// let num = 3;
// for(let i = 1 ; i<=num;i++){
//     for(let j = 3; j>=i ; j--){
//         process.stdout.write("* ")
//     }
//       rocess.stdout.write("\n")
// }


// Q4     *
//       **
//      ***

// let num = 3;
// for(let i =1 ; i<=num ; i++){
//     for(let j = i; j<=num; j++){
//         process.stdout.write(" ")
//     }
//     for(let k = 1; k<=i ; k++){
//          process.stdout.write("*")
//     }
//     console.log();
    
// }


// Q5  ***
//      **
//       *

// let num = 3;
// for(let i = 1; i<=num ; i++){
//     for(let j = 1 ; j<=i; j++){
//         process.stdout.write(" ")
//     }
//     for(let k = i ; k<=num; k++){
//         process.stdout.write(" *")
//     }
//     console.log();
    
// }


// Q6   *
//    *   *
//   *   *   *

// let num = 3;
// for(let i = 1 ; i<=num ; i++){
//     for(j=i; j<=num; j++){
//         process.stdout.write(" ")
//     }
//     for(let k = 1; k<=i ; k++){
//         process.stdout.write("* ")
//     }
//     console.log();
    
// }


// Q7   * * * 
//       * *
//        *

// let num = 3;
// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=i; j++){
//         process.stdout.write(" ")
//     }
//     for(let k = i ; k<=num; k++){
//         process.stdout.write(" *")
//     }
//     console.log();
    
// }


// Q8     *
//     *  *  *
//   *  *  *  *  *

// let num = 3;
// let a = 1;

// for(let i = 1; i<=num; i++){
//     for(let j = i; j<=num; j++){
//         process.stdout.write("  ")
//     }
//     for(let k =1 ; k<=a; k++){
//         process.stdout.write(" *")
//     }
//     a=a+2;
//     console.log();
    
// }

// Q9   *  *  *  *  *
//         *  *  *
//            *

// let num = 3 ;
// let a = 5;

// for(let i = 1; i<=num;i++){
//     for(let j =1; j<=i; j++){
//         process.stdout.write("  ")
//     }
//     for(let k = 1; k<=a; k++){
//         process.stdout.write(" * ")
//     }
//     a= a-2;
//     console.log();
    
// }


// Q10    *  # *  #
//        *  # *  #
//        *  #  *  #
//        *  #  *  #

// let num = 4;
// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=num; j++){
//         if(j % 2==0 ){
//             process.stdout.write("# ")
//         }
//         else{
//             process.stdout.write("* ")
//         }
//     }
//     console.log();
    
// }

// Q11  1  2  3
//      4  5  6
//      7  8  9


// let num = 3;
// let a = 1;

// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=num ; j++){
//         process.stdout.write(`${a}`);
//           a++
//     }
  

//     console.log();
    
// }



// Q12   #  *  #
//       #  *  #
//       #  *  #

// let num = 3;
// for(let i = 1 ; i<=num;i++){
//     for(let j = 1; j<=num ; j++){
//         if(j%2==0){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" # ")
//         }
//     }
//     console.log();
    
// }


// Q13  * # * # * 
//      # * # * #
//      * # * # *

// let num = 3;
// for(let i = 1; i<=1;i++){
//     for(let j = 1; j<=5; j++){
//         if(j%2 == 0){
//             process.stdout.write("#")
//         }
//         else{
//             process.stdout.write("*")
//         }
//     }
//     console.log();

//     for(let k = 1; k<=5; k++){
//         if(k%2==0 ){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write("#")
//         }
//     }
//     console.log();

//     for(let l = 1; l<=5; l++){
//         if(l % 2==0){
//             process.stdout.write("#")
//         }
//         else{
//             process.stdout.write("*")
//         }
//     }
//     console.log();
    
    
    
// }


// Q14   1
//       2 3
//       4 5 6

// let num = 3 , a = 1
// for(let i = 1; i<=num; i++){
//     for(let j = 1 ; j<=i ; j++){
//         process.stdout.write(`${a}`)
        
//           a++
//     }
  
  
    
//       console.log();
// }


// Q15   #
//       * # *
//       * # *

// let num = 3;
// for(let i = 1; i<=num-1 ; i++){
//     for(let j =1 ; j==i; j++){
//         process.stdout.write("#")
//       console.log();
//     }
   
    
  
//     for(let k = 1; k<=num; k++){
//         if(k % 2==0){
//             process.stdout.write("#")
//         }
//         else{
//             process.stdout.write("*")
//         }
//     }
//     console.log();
    
// }


// Q16   * 
//       * *
//       * * *
//       * *
//       *

let num = 3;  
for(let i = 1; i<=num; i++){
 
    for(let j = 1; j<=i; j++){
        process.stdout.write("*")
    }
   
    console.log();
    
}

for(let i = num-1 ; i>=1; i--){
    for(let j = 1 ; j<=i ; j++){
        process.stdout.write("*")
    }
    console.log();
    
}






