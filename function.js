
let a=5
for(i=0;i<=1;i++){
    let a=10
    var b=30
    c=40
}
//always use let otherwise the var or a will be accessable from outside the scope
/*
console.log(a)
console.log(b)
console.log(c)
*/
//this refers to the current context
let user={
    name:"user",
    price:999,
    welcome:function(){
        console.log(`${this.name}, good morning`);
        console.log(this);
    }
    
    
}
//5user.welcome();
//user.name='rohan'
//user.welcome();
//console.log(this); //{}

/*const add=(a,b)=>{
    return a+b
}*/
add=(a,b)=>(a+b)
/* when we use {} we need to give return keyword otherwise simply write (a+b) 
explisit return : when we use return keyword
implesit return : when we don't use return keyword*/
console.log(add(1,2))
