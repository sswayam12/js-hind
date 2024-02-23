// const tinderUser = new Object();
const tinderUser ={}

 tinderUser.id ="123abc";
 tinderUser.name="Swayam";
 tinderUser.iasLoggedIn =false;

//  console.log(tinderUser);

const regularUser ={
    email:"swayam@gamil.com",
    fullname:{
        firstName:"Swayam",
        lastName:"Singh"
    }
}

// console.log(regularUser.fullname.firstName);

const obj1 ={
    1:"A",2:"B"
}

const obj2 ={3:"a",4:"b"}

// const obj3 = Object.assign({},obj1,obj2);

const obj3 ={...obj1,...obj2};

// console.log(obj3);

// user[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('iasLoggedIn'));


const course ={
    coursename:"js in hindi",
    price:"ggg",
    courseInstructor:"Hitesh"
}

// course.couurseInstructor

const {courseInstructor} = course;
console.log(courseInstructor);

const{coursename} = course;
console.log(coursename);

const {price} = course;
console.log(price);


// API

{
    {};
    {};
    {};
}