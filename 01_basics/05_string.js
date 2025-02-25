const name = "tejendra"
const repoCount = 5

// console.log(name + repoCount + " value");   this is the outdated way 

// console.log(`Hello my name is ${name} and my repocount is ${repoCount} `);

// another way to declare string is 
const newGame = new String('uppal-jaat-com')
// console.log(newGame);

// console.log(newGame [0]);
// console.log(newGame.__proto__);


// console.log(newGame.length);
// console.log(newGame.toUpperCase());

// console.log(newGame.charAt(2));
// console.log(newGame.indexOf('a'));


const newString = newGame.substring(0 , 3)
// console.log(newString);


const anotherString = newGame.slice(6 , 10)
// console.log(anotherString);

const newStringOne = "    uppal     "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://tejendra.com/singh%20uppal"

// console.log(url.replace('%20' , '-'));
// console.log(url.includes('vishwa'));


console.log(newGame.split('-'));
