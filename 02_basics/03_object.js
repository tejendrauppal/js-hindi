// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Tejendra",
    "full name": "Tejendra Singh",
    [mySym]: "mykey1",
    age: 19,
    location: "Chandigarh",
    email: "tejendrauppal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "tejendra4856@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "4856uppal@gmail.com"
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("hello js user");
}
jsUser.greetingtwo = function () {
    console.log(`Hello User, ${this["full name"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());

