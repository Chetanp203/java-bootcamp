//Assignment 1//

// let fruits = [];

// fruits[0]='apple';
// fruits[1]='banana';
// fruits[2]='orange';
// console.log(fruits);
// fruits.splice(0,1);
// console.log(fruits)
// fruits.push('grape');
// console.log(fruits)
// fruits.splice(1,0,'pear')
// console.log(fruits)



// Assignment 2 //


// let person = {
//     name :"john",
//     age : 30,
//     city : "New york"
// }

// delete person.age
// console.log(person)
// person.job = "Engineer";
// console.log(person)
// person.city ="San francisco";
// console.log(person)



// Assignment 3 //

let cars =[{make:"toyota",model:"camry",year:"2018"},
           {make:"suzuki",model:"swift",year:"2017"},
           {make:"honda",model:"jazz",year:"2015"} ]

 cars.splice(0,1)         ;
 console.log(cars) 
cars.push({make:"honda",model:"civic",year:"2020"});
console.log(cars)
cars[1].model="accord";
console.log(cars)