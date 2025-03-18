// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "4856"
tinderUser.name = "Tejendra Singh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"Tejendra",
            lastname:"Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1 , ...obj2}
// console.log(obj3);

const user = [
    {
        id:1,
        email:"tejendrauppal56@gmail.com"
    }
]

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    name: "js in hindi",
    price: "1299",
    instructor: "Krish"
}

// course.instructor

const {instructor} = course

console.log(instructor);
