const name ="Swayam";
const repoCount = 50;

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Hitesh-hc');

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "  Swayam   ";
console.log(newStringOne.trim());

const url ="https://swayam.com/hitesh%20choudary";
console.log(url.replace('%20','='));

console.log(url.includes('Hitesh')); 

console.log(gameName.split('-'));


