//  Dates 


// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let createdDate = new Date(2025, 0, 25)
// console.log(createdDate.toDateString());

// let createdDate = new Date(2025, 0, 23, 5, 3)

// let createdDate = new Date("2025-02-25")

let createdDate = new Date("01-26-2025")
// console.log(createdDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(createdDate.getTime());

// console.log(Math.floor(Date.now() / 1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
})