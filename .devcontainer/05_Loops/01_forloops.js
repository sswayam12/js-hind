// for

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element === 5){
//         console.log("5 is the best number");
//     }
//     console.log(element); 
// }


// for (let index = 0; index < 10; index++) {
//     console.log(`Outer loop is ${index}`);
// for (let i = 0; i < 10; i++) {
//     // console.log(`Inner loop value ${i} and inner loop ${index}`);
//     console.log(index + '*' + i + '=' + index*i);
    
// }    
// }


let myArray =["flash","Batman","Superman"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


//  break and continue

// for (let i = 0; i <= 20 ; i++) {
//     if(i === 5)
//     console.log("Detected 5");
//     break;
//     console.log(`Value of i is ${i}`);
    
// }
for (let i = 0; i <= 20 ; i++) {
        if(i === 5)
        console.log("Detected 5");
        continue;
        console.log(`Value of i is ${i}`);
        
    }