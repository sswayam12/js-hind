// Primitive Datatypes

/*
1. Number
2.String
3.Boolean
4.Null
5.undefined
6.Symbol
7.BigInt
*/

// const score = 100; 
// Dynamically typed

// Reference or non Primitive

/*
Array
Objects
Functions
*/

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); //False


const heros = ["Shaktiman","Naagraj","Doga"];

let myobj ={
    name:"Swayam",
    age:22,
}

 const myfunction = function(){
    console.log("Hello");

}

const bigNumber = 34556788986543n;

// Null ka typeof object hota hai
console.log(typeof null);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) and heap(Non-Primitive) memory

let myYoutube = "ehddsvsfxbfb";

let anotherName = myYoutube;
console.log(anotherName);

