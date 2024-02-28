// for of

// [""," "," "];
// [{}, {}, {}];

const arr = [1,2,3,4,5];

for (const val of arr) {
    // console.log(val);
}

const greeting ="Hello world !";

for (const greet of greeting) {
    // console.log(greet);
}

// Maps

const map = new Map();
map.set('IN',"India");
map.set('Fr',"France");
map.set('USA',"United State Of America");

console.log(map);

for (const [key,value] of map) {
    console.log(key);
    console.log(value);
}


const myObject = {
    'game1':'NFS',
    'game2':'Spiderman'
}