const accountID = 178888
let accountEmail = "ashu@.gmail.com"
var accountPassword = "12345"
accountCity = "jabalpur"
let accountState;

// accountID = 2 // not allowed

accountEmail = "as@hu.com"
accountPassword = "5423187"
accountCity = "khurai"


console.log(accountID);


/*
prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountID, accountEmail, accountPassword, accountCity, accountState])


