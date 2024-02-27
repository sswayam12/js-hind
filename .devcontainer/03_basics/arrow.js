const user = {
    userName: "Swayam",
    price:999,
    
    welcomeMessage: function(){
        // console.log(`${this.userName}, welcome to website`);

    }
}
user.welcomeMessage();
user.userName = "Hitesh";
// user.welcomeMessage();
// console.log(this);

// function chai(){
//     let username ="hitesh";
//     console.log(this.username);
    
// }
// chai();


const chai = () => {
    let username ="hitesh";
    // console.log(this);
}
chai();


const AddTwoNumbers = (a,b) => {
    return a+b;
}

console.log(AddTwoNumbers(2,4));