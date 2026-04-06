// Q1
let readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question("Enter a number:", function(number){
    let n = Number(number)
    console.log("You entered:",n);
    console.log(typeof(n));

    readline.close()
})

//Q2 

let intgers = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
intgers.question("Enter two numbers:",function(sum){
    let a = Number(a);
    let b = Number(b);
    let sums = a + b;
    
    console.log("Sum of two number:",sums);

    intgers.close()
    
}) //incomplete

// Q4
 let char = require("readline").createInterface({
     input: process.stdin,
    output: process.stdout
 })
 char.question("Enter a Character:", function(character){
    console.log("You entered:",character);
    
   char.close()
 })


//Q5

let username1 = prompt("Enter Your Name");
let marks = prompt("Enter Your Marks");
let grade = prompt("Enter Your Grade");
let Class = prompt("Enter Your Class");

console.log("name:",username1, "marks:",marks, "Grade:",grade ,"Class:",Class );
alert(`Hello, ${username1}!You scored${marks}and got grade${grade}in class ${Class}`);


//Q6 

let square = require("readline").createInterface({
     input: process.stdin,
     output: process.stdout
})
square.question("Enter a number: ",function(num){
  let sq = Number(num);

  let square = sq * sq;
  let cube = sq * sq * sq;

  console.log("Square",square);
  console.log("Cube",cube);
}) 

//Q7 
let price = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
price.question("Enter One Product Price :",function(product){
    price.question("Enter Quantity of Prodect :",function(Quantity){
        let total = product * Quantity
        console.log("Total:", total);

        price.close()
        
    })
})

// Q9
let average = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
average.question("Enter a first subject marks:",function(first){
    average.question("Enter a second subject marks:",function(second){
        average.question("Enter a third subject marks:",function(third){
            first = Number(first);
            second = Number(second);
            third = Number(third);
            let allsubject = (first + second + third) / 3;
            console.log("average:", allsubject);

            average.close()
            

        })
    })
})

// // Q11 
let area = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
area.question("Enter the length of rectangle =",function(length){
    area.question("Enter the breadth of rectangle =",function(breadth){
        length = Number(length);
        breadth = Number(breadth);
        let areaof = length * breadth;
        console.log("Area of rectangle =",areaof);
        
        area.close()
    })
})

// Q12
let interest = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
interest.question("Enter a P =",function(p){
    interest.question("Enter a R =", function(r){
        interest.question("Enter a T =",function(t){
            p = Number(p);
            r = Number (r);
            t = Number (t);
            let SI = (p * r * t) / 100;
            console.log("Simple Interest =",SI);
            interest.close()
        })
    })
})

// Q13
let speed = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
speed.question("Enter the distance =",function(distance){
    speed.question("Enter the time =",function(time){
        distance = Number(distance);
        time = Number(time);
        let calculate = distance / time ;
        console.log("Calculate Speed =",calculate);

       speed.close()
        
    })
})

//Q18 
let username = prompt("Enter Your Name");
console.log("username");
alert(`hello ${username}!`)


//Q19
let uname = prompt("Enter Your Name")
console.log("uname");
alert(`Hello ${uname},welcome to JavaScript`)

// Q20 
 let num1 = Number(prompt("Enter a first number"));
 let num2 = Number(prompt("Enter a second number"));
let sum = num1 + num2;
 alert(`The sum of ${num1} and ${num2} is ${sum} `)
 
