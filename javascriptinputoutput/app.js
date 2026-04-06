
// let username = prompt("enter Your Name");
// console.log("Name:", username);

let readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

// readline.question("Enter Your Name:", function(name){
//     console.log("Name:",name);
    
// })


// readline.question("Enter a number:", function(num){
//     let n = Number(num)
//     console.log("number:",n);
//   console.log(typeof(n));
  
    
    
// })

readline.question("Enter a number:", function(num){
    let n = Number(num)
    if(n % 2 == 0){
        console.log("Number is even : ", n);
        
    }
    else{
        console.log("Number is odd", n);
        
    }
    readline.close()
})


