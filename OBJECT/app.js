// Creating Objects


// * Object Literal----

// let car = {
//     name:"tesla",
//     brand: "model C",
//     year: 2023
// };

// console.log(car);

// let student = {
//     name: "Ishu Kumar",
//     id : 1 ,
//     marks : [99,98,97]
// };
// console.log(student);



// * Using new Object() Constructor----

// let car = new Object();

// car.brand = "tesla";
// car.model = "Model C";
// car.year = 2023;

// console.log(car);


//  * Using Constructor function ------


// function student(studentname,studentid){
//     this.name = studentname;
//     this.id = studentid;
// }

// let s1 = new student("Ishu kumar",999);
// console.log(s1);


// (B)   Accessing Object Properties
//  * Dot Notation ✅-----

// console.log(car.brand);
// console.log(car.model);
// console.log(car.year);

// console.log(student.name);
// console.log(student.marks);
// console.log(student.id);






// * Bracket Notation (For dynamic keys or special characters)----""

// console.log(car["brand"]);

// let obj = {
//     "full Name": "ishu"
// };

// console.log(obj["full Name"]);



// (C)   📌 Modify / Add Properties 

// let car = {
//     name: "tesla",
//     brand:"model",
//     year : 2023
// };

// console.log(car);

// car.year = 2024; // Modify
// console.log(car);

// car.color = "red";// add
// console.log(car);

// student.marks = [96,95,94]
// console.log(student);

// student.mobNo = 99999999;

// console.log(student);

// delete student.mobNo; // DELETE KEY IN OBJECT 

// console.log(student);







// 📌 Object Methods----

// let student = {
//     name : "Ishu",

//     greet:function(){
//         console.log(`Hello my name is ${this.name}`);
        
//     }
// };

// student.greet();


// let student = {
//     name : "Ishu Kumar",
//     id : 1 ,
//     marks : [33,98,33],

//     print: function(){
//         console.log("Name =",this.name, "Id =", this.name, "Marks =",this.marks);
        
//     }
// }
// console.log(student);
// student.print()



// let student = {
//     name : "Ishu Kumar",

//     my :function(){
//         console.log(`Hello,My name is ${this.name}`);
        
//     }
// }
// student.my();




// 📌 Nested Objects ----

// let person = {
//     name: "Ishu Kumar",
//     address:{
//         city:"Patna",
//         country:"India"
//     }
// }
// console.log(person.address.country);




//   Object Destructuring

//   🔹 Extracting values into variables:

//   let user = {
//     name : "Ishu Kumar",
//     age : 18
//   };

//   let {name,age} = user;

//   console.log("Name :",name,        "Age :", age);
 
  
// 🔹 Renaming while destructuring:

let user = {
    name:"ishukumar",
    age: 18
};

let{
    name: userName,
    age : userAge
} = user
console.log(userName);






// 📌 Object Iteration  

// 🔹 for...in Loop----

// let car = {
//     brand :"BMW",
//     model: "X5",
//     year : 2022

// };

// for(let key in car){
//     console.log(key,car[key]);
    
// }




// (B) 🔹 Object.keys() → Array of keys----

// let user = {
//     name:"Ishu Kumar",
//     age: 18
// };

// console.log(Object.keys(user));  // ["name", "age"]



//  (C)   🔹 Object.values() → Array of values-----

// let user = {
//     name : "ishu",
//     age : 18
// };

// console.log(Object.values(user)); // ["ishu",18]



// (D) 🔹Object.entries() → Array of key-value pairs----


// let user = {
//     name: "Ishu Kumar",
//     age: 18
// };

// console.log(Object.entries(user));   //   [ [ 'name', 'Ishu Kumar' ], [ 'age', 18 ] ]





//  📌 Object Copying  

//  (A) 🔹 Shallow Copy ------

// let obj1 = {
//     name: "ishu"
// };

// let obj2 = {...obj1};

// obj2.name = "Amit"

// console.log(obj1); //   { name: 'ishu' }





//  AARAY Destructuring


// let arr = [1,2,3,4];

// let [a,b,c,d] = arr;

// console.log(`a = ${a}    b = ${b}    c = ${c}     d = ${d}`);




// OBJECT DESTRUCTURING

// let obj = {
//     name: "Ishu",
//     id: 999
// };

// let {name,id} = obj;

// console.log(`name = ${name}    id = ${id}`);



// OBJECT KEYS 

// let student = {
//     name : "Ishu kumar",
//     id : 999,
//     course : "Full stack"
// };

// let keys = Object.keys(student);
// console.log(keys);

// for(key of keys){
//     console.log(student[key]);
    
// }



// let student = {
//     name: "Ishu Kumar",
//     id: 999,
//     course: "Mern stack"
// };

// let keys = Object.keys(student);

// console.log(keys);

// for(key of keys){
//     console.log(student[key]);
    
// }



// OBJECT VALUE----

// let student = {
//     name:"ishu",
//     id: 888
// };

// let keys = Object.values(student);
// console.log(keys);





// OBJECT ENTRIES ------

// let student = {
//     name:"ishu",
//     id:999
// };

// let entry = Object.entries(student);
// console.log(entry);

// for([key,value ]of entry){
//     console.log("Key =",key,  "value =", value);
    
// }




// OBJECT ASSIGN ------

// let obj1 = {
//     name: "ishu ",
//     id: 88
// };

// let obj2 = {
//     name1 :"rohit",
//     id1 : 87
// };

// let obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);





// OBJECT FREEZE -----

// let obj = {
//     name: "Ishu",
//     id: 99
// };
// console.log(obj);

// Object.freeze(obj);

// obj.id = 22;
// console.log(obj);




// OBJECT SEAL ----- BSS UPDATE KAR SAKTE HAI DELETE YA ADD NHI KAR SAKTE HAI
//  let obj = {
//     name:"ishu",
//     id:87
//  };

//  console.log(obj);

//  Object.seal(obj);

//  obj.id = 1;

//  obj.roll = 234;


 
//  console.log(obj);
 
 



// OBJECT HASOWN PROPERTY ----- OBJECT MAI KEY HAI YA NHI WO CHECK KARTA HAI AUR ANSWER TRUE YA FALSE MAI DETA HAI

// let obj = {
//     name : "Ishu",
//     age : 19,
//     roll : 1
// };

// console.log(obj.hasOwnProperty("age"));
// console.log(obj.hasOwnProperty("id"));






