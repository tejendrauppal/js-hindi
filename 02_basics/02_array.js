const marvel_heroes = ["Ironman", "Thor", "Spiderman"]
const dc_heroes = ["Flash", "Batman", "Superman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const newHeroes = [...marvel_heroes, ...dc_heroes] 
// console.log(newHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [4, 5, 6]]]

const realArray = anotherArray.flat(Infinity)
console.log(realArray);

console.log(Array.isArray("Tejendra"));
console.log(Array.from("Tejendra"));
// console.log(Array.isArray({name: "Tejendra"}));  interesting

let score1 = 30
let score2 = 56
let score3 = 48

console.log(Array.of(score1, score2, score3));
