


//  Q1  Write a javascript program to create an object and print it.

// let student = {
//     name:"Ishu Kumar",
//     age : 19,
//     course: "Full stack"
// };
// console.log(student); // { name: 'Ishu Kumar', age: 19, course: 'Full stack' }



// Q2  Write a JavaScript program to access object properties using:  Dot Notation 

// let car = {
//     brand: "BMW",
//     model: "X5"
// };

// console.log(car.brand); // BMW
// console.log(car.model); // X5



// Q3  Write a JavaScript program to add a new property in an object.

// let user = {
//     name: "Ishu Kumar"
// };
// console.log(user); //  { name: 'Ishu Kumar' }

// user.age = 18

// console.log(user); //  { name: 'Ishu Kumar', age: 18 }




//   Q4  Write a JavaScript program to update an existing property in an object.

// let product = {
//     name : "Laptop",
//     price: 50000
// };
// console.log(product); //  { name: 'Laptop', price: 50000 }

// product.price = 55000

// console.log(product); //   { name: 'Laptop', price: 55000 }





// Q5  Write a JavaScript program to delete a property from an object.

// let employee = {
//     name: "Ishu Kumar",
//     salary: 30000
// };
// console.log(employee);  // { name: 'Ishu Kumar', salary: 30000 }

// delete employee.salary;

// console.log(employee);  // { name: 'Ishu Kumar' }




// Q6  Write a JavaScript programt to create an object method.

// let user = {
//     name: "Ishu",

//     print: function(){
//         console.log(`Hello ${this.name}`);
        
//     }
// }
// user.print(); // Hello Ishu



// Q7  Write a JavaScript program to access nested object properties.

// let person = {
//     name: "Ishu",
//     address:{
//         city:"patna",
//         state:"bihar"
//     }
// }
// console.log(person.address.city);  // patna
// console.log(person.address.state);  // bihar



// Q8 Write a JavaScript program to access object property dynamically 

// let user = {
//     name: "Ishu kumar",
//     age: 19
// }
// let {name,age} = user;

// console.log(name);



// Q9 Write a JavaScript program to print all keys of an object using.

// let person = {
//     name: "Ishu",
//     age: 18,
//     city: "Patna"
// }
// console.log(Object.keys(person)); // [ 'name', 'age', 'city' ]




// Q10  Write a JavaScript program to print all values of an object using:

// let person = {
//     name:"ishu",
//     age: 19,
//     city: "Patna"
// }
// console.log(Object.values(person));



// Q11. Write a JavaScript program to print key-value pairs using:
// Object.entries()


// let person = {
//     name: "ishu",
//     age: 19
// };

// let obj = Object.entries(person);
// console.log(obj);



// for([key,value]of obj){

//     console.log("key =",key , "value =",value);
    
    
    
// }




// Q12. Write a JavaScript program to iterate over an object using:
// for...in loop


// let car = {
//    brand: "BMW",
//    model: "X5",
//    year: 2024
// }

// for(key in car){
    
//     console.log(key,car[key]);
    
// }




// Q13. Write a JavaScript program to count total properties in an object.

// let obj = {
//     name:"ishu",
//     age: 19,
//     roll:1
// };
// let count = 0;


// for(key in obj){
//     count++
//     console.log(key,obj[key]);
    
// }

// console.log("Total properties =",count);




// Q14. Write a JavaScript program to check whether a property exists in an object using:
// hasOwnProperty()


// let user = {
//    name: "Ishu",
//    age: 19
// }
// console.log(user.hasOwnProperty(("name")));





// Q19. Write a JavaScript program to freeze an object using:
// Object.freeze()


// let user = {
//     name:"Ishu"

// }
// console.log(user);

// Object.freeze(user);

// user.name = "ishu kumar";
// console.log(user);




// Q20. Write a JavaScript program to seal an object using:
// Object.seal()

// let user = {
//     name:"ishu",
//     id:1
// };

// console.log(user);

// Object.seal(user)

// user.roll = 3;

// user.id = 2

// console.log(user);




// Q21. Write a JavaScript program to destructure an object.

// let user = {
//    name: "Neha",
//    age: 25
// };

// let {name,age} = user;

// console.log("name =",name);
// console.log("age =",age);





// Q22. Write a JavaScript program to rename variables while destructuring.

// let user = {
//    name: "Rahul",
//    age: 28
// }
// let {
//    name : username,
//    age: userage
// } = user
// console.log("username =",username);
// console.log("userage =",userage);



// Q23. Write a JavaScript program to convert object into array using:
// Object.entries()

// let user = {
//    name: "Abhi",
//    age: 22
// };

// console.log(Object.entries(user));




// Q24. Write a JavaScript program to convert array into object using:
// Object.fromEntries()


// let arr = [["name","rahul"],["age", 18]];

// console.log(Object.fromEntries(arr));



// Q25. Write a JavaScript program to calculate total marks and average marks using object.

// let student = {
//    name: "Abhi",
//    marks: [70, 80, 90]
// }
// let totalmarks = student.marks[0] + student.marks[1] + student.marks[2];
// console.log("totalmarks =",totalmarks);
// let average = totalmarks / student.marks.length;
// console.log("average =",average);





// Q26. Write a JavaScript program to calculate total price of products.

// let product = {
//    name: "Laptop",
//    price: 50000,
//    quantity: 2
// };

// let totalprice = (product.price * product.quantity);
// console.log(totalprice);



// Q27. Write a JavaScript program to increase employee salary by 10%.

// let employee = {
//    name: "Rahul",
//    salary: 50000
// };

// let update = (employee.salary / 10);

// let updatedsalary = (employee.salary + update);

// console.log("Updatedsalary =",updatedsalary);



// Q29  Write a JavaScript program to print only available books from array of objects.

// let arr = [{title:"book1",available:true},{title:"book2",available:false}];

// for(let i = 0; i<arr.length; i++){
//     if(arr[i].available == true ){
//         console.log(arr[i].title);
        
//     }
// }




// Q30  Write a JavaScript programs to find highest price product from array of objects.

let arr = [
    {name:"mouse",price:500},
    {name:"laptop",price:50000},
    {name:"keyboard",price:1500}
]
for(let i = 0; i<arr.length; i++){
    if(arr[i][0].arr.price >arr[i][1].arr.price){
        console.log(arr[i].title ,"=" ,arr[i][0].price);
        
    }
  else if(arr[i][1].arr.price > arr[i][2].arr.price){
    console.log(arr[i].title, "=",arr[i][1].price);
    
  }
  else{
    console.log(arr[i].title, "=",arr[i][2].price);
    
  }
}
