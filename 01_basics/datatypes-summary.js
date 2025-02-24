// Primitive

// 7 types : String , Number , Boolean , Null , Undefined , Symbol , BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigInt = 33448242842832402382n

// Reference (Non-Primitive)

//  Array , Objects , Functions


const heroes = ["superman", "batman", "aquaman"]

let myObj = {
    name : "tejendra",
    age : 19,
}

const myFunction = function(){
    console.log("Hello World");
    
}



// **************************************************************************************************************


//Stack(primitive) and Heap(refrence)


let myName = "tejendrauppal"

let anotherName = "tejendrasingh"

console.log(myName);
console.log(anotherName);


let userOne = {
    email : "tejendrauppal@gmail.com",
    upiId : "user@ybl"
}

let userTwo = userOne

userTwo.email = "tejendrauppal56@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

