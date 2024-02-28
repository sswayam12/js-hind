const coding =["js","Ruby","Java","Python","cpp"];

// coding.forEach((value)=>{
//      console.log(value);
// });


function printMe(items){
    // console.log(items);
}

// coding.forEach(printMe);

// coding.forEach((items,index,arr) =>{
//     console.log(items,index,arr);
// })

const myCoding = [ {
    languageName: "java",
    languageFileName:"java"
},
{
    languageName: "C++",
    languageFileName:"cpp"
},
{
    languageName: "javascript",
    languageFileName:"js"
}]

myCoding.forEach((items) =>{
    console.log(items.languageFileName);
})