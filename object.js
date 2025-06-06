//object singleton
//object.create
//object literals

//take a symbol as the key of an obj
symbol=Symbol("key1")
let obj={
    name : "anit",
    age : 18,
    "full name":"anit paul",
    [symbol]:"my symbol"
}
//console.log(obj);
//console.log(obj["name"]);
//console.log(obj["full name"]);
//console.log(obj[symbol]);
//Object.freeze(obj)
//obj.name="rohan" //can't change as we have freezed it
/*obj.greetings=function(){
    console.log(`Good Morning ${this.name}`)
}
console.log(obj.greetings())*/

student={
    new_name:{
        first_name:"anit",
        last_name:"paul"
    },
    occupation:'student'
}
let obj3=Object.assign(obj,student) //for merging two obj
// if 2 objects have same key then the value of the key will be replaced by 2nd obj key
//console.log(obj3)

//console.log({...obj,...student})
//console.log(student.hasOwnProperty('new_name'))

/*object destructuring
Object destructuring is a convenient way to extract values from an object and assign them to variables in a clean, readable way.
*/
user={
    name:"user",
    age:18,
    sex:'male'
}
const {name,age}=user
console.log(name,age);

const {name : n,age:a}=user
console.log(n,a);

