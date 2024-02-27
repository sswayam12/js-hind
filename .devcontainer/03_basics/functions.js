// function sayMyName(){
//     console.log("h");
//     console.log("h");
//     console.log("h");
//     console.log("h");
//     console.log("h");

// }

// sayMyName();

// function AddTwoNumbers(a , b){
//     return a + b;
// }

// console.log(AddTwoNumbers(3,5));


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a user name");
        return;
    }
    return`${username} just logged in`;
}

const result = loginUserMessage();

// console.log(result);

