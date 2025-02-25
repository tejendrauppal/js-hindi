// Array


const myArr = [1,3,5,7,9]
const heroes = ["Superman", "Aquaman", "Batman"]

const myArr2 = new Array(2,3,4,5,6,7)

// console.log(myArr2[2]);


// Array Methods

// myArr.push(8)
// myArr.pop()

// myArr.unshift(8)
// myArr.shift()

// console.log(myArr.includes(4));
// console.log(myArr.indexOf());


const newArr = myArr.join()

// console.log(newArr);
// console.log(myArr);


// Slice and Splice

console.log('A', myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log('B', myArr);

const myn2 = myArr.splice(1, 3)
console.log('C', myArr);
console.log(myn2);
