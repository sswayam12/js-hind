// const myNums = [1,2,3,4,5,6,,7,8,9,10];

// // const newNums = myNums.filter((num) => {
// //     return num > 4;
// // });

// // const newNums = [];

// // myNums.forEach((nums)=>{
// //     if( nums > 4){
// //         newNums.push(nums);
// //     }
// // })
// // console.log(newNums);


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

// //   let userBooks = books.filter( (bk) => bk.genre === 'History')

// //   userBooks = books.filter( (bk) => { 
// //     return bk.publish >= 1995 && bk.genre === "History"
// // })
// //   console.log(userBooks);


// //   ========================================================================================================================>

// const myNumbers = [1,2,3,4,5,6,7,8,9,10];
// // const newNums = myNumbers.map((num) => {return num + 10})

// const newNums = myNumbers
// .map((num) => num * 10)
// .map((num) => num / 5)
// .filter((num) => num >=10)
// console.log(newNums);

// =======================================================================================================>

// Reduce

const myNums = [1,2,3,4,5];
const initalValue = 0;
const Add = myNums.reduce((previous,current) =>{
console.log(`previous: ${previous} and current: ${current}`)
return previous + current}, initalValue);
console.log(Add);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);