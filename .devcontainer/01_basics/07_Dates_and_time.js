// DATES

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);  //date is an object

let myCreatedDate = new Date("01-23-2023");
console.log(myCreatedDate.toLocaleDateString());

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let newDate = new Date();
console.log(newDate);
console.log((newDate.getDay()));

newDate.toLocaleString('default',{
    weekday:"long"
})




