// Arrays

const myArray = [0,1,2,3,4];
// console.log(myArray[0]);

const myArr = new Array(1,2,3,4);

// METHODS

myArray.push(6);
console.log(myArray);

myArray.pop();
console.log(myArray); // last element ko pop karta hai

myArray.unshift(9);
console.log(myArray); //First me add karta h unshift

console.log(myArray.includes(9));
console.log(myArray.indexOf(9));

const arr = myArray.join();
console.log(myArray);
console.log(arr);

// Slice ,Splice

console.log("A",myArray);

const myn1 = myArray.slice(1,3);
console.log(myn1);

console.log("B" ,myArray);
const myn2 = myArray.splice(1,3);
console.log(myn2);

