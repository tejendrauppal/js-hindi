const accountId = 14453
let accountEmail = "tejendrauppal@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;

// accountId = 2  not allowed to change if const is declared 

accountEmail = "uppal4856@gmail.com"
accountPassword = "12312431"
accountCity = "Chennai"

console.log(accountId);

/*
prefer not to use var , because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

