const userEmail ="sswayam7679@gmail.com";

if (userEmail) {
    console.log("Got user Email");
}else{
    console.log("Don't have user email");
}

// Falsy Value
// false, 0, -0,BigInt 0n,"",null,undefined, NaN

// Truthy Values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("array is empty");
}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// NUllish Coalescing Operator (??): null defined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15;
// console.log(val1);

// Ternaray Operator
// condition ? true:false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80");
