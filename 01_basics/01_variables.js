const accountId = 10  // value cannot be changed in const
let accountEmail = "alson@gmail.com"
var accountPassword = "123"
accountCity = "Pokhara"
let accountState;

// accountId = 1

accountEmail = "hello@gmail.com"
accountPassword = "321"
accountCity = "Kath"

console.log(accountId);

/* 
Prefer not to use var 
because of isssue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

