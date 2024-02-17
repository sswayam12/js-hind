const marvel_heros = new Array("Thor","Ironman","captainAmerica");
const dc_heros = new Array("superman","Batman","Aquaman");

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// const hero = marvel_heros.concat(dc_heros);
// console.log(hero);

const hero = [...marvel_heros,...dc_heros];

// console.log(hero);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Swayam"));
console.log(Array.from("Swayam"));
console.log(Array.from({name: "Swayam"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
