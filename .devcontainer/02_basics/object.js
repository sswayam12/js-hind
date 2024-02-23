// Singleton

//  object literals

const mySym = Symbol("Key1");

const JsUser = {
    name:"Swayam",
    age:22,
    Location:"Hyderabad",
    isLoggedIn:true,
    [mySym]:"key1"
}

console.log(JsUser["isLoggedIn"]);
console.log(JsUser[mySym]);

JsUser.name = "Vikram";
// Object.freeze(JsUser);
JsUser.name="qwerty";
console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello Js User ${this.name}`);
}
console.log(JsUser.greeting());

