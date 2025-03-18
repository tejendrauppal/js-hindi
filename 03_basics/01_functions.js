function sayMyName() {
    console.log("k");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("n");
    console.log("a");
}

// sayMyName()

// function addTwoNUmbers(number1 , number2) {
//     console.log(number1 + number2);
// }

// addTwoNUmbers (3 , 4)
// addTwoNUmbers(5, "6")

function addTwoNUmbers(number1 , number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNUmbers(5 , 6)

// console.log("result : ", result);

function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Mayank"));
// console.log(loginUserMessage());


// function calculateCartPrice(...num1) {
//     return num1
// }

// console.log(calculateCartPrice(200,400,500));

function calculateCartPrice(value1,value2,...num1) {
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "Mayank",
    price: 299
}

function handleObject (anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)


const myNewArray = [200,400,600,800]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
