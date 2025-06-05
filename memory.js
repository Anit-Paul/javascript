/*
stack => all primitive data types
heap => all non primitive data types
*/
let name1="anit"
let name2=name1 //in this case we are not getting reference we getting a copy so the original will be untouched
name2="anit paul"
console.log(name1,name2);

let obj={
    email : "anit42655@gmail.com",
    age : 20
}
obj2=obj // in this case we are getting the reference so original copy will be affected
obj2.age=40
console.log(obj.age,obj2.age)
