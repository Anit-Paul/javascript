const id = 1234; //we can't change
let email = "test@gmail.com"; //we can change it
var password = 1234; //we can change
city = "kolkata"; //we cab change
let date; //undefine

//id=2
email = "test2@gmail.com";
city = "bangalore";
password = 5678;
//console.log(email);
console.table([id, email, password, city, date]);

/*var is not block-scoped, which means variables declared inside {} blocks like if, for, or while still exist outside the block.

if (true) {
    var a = 10;
}
console.log(a);
*/
