//The promise object represents the eventual completion or failure of an asynchronous operation and its resulting value
/*const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("timeout called");
    resolve();
  }, 2000);
});
//if successfully done means resolve then go to then
promise.then(() => {
  console.log("promise resolved");
});
console.log("------------------------------");
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "user", mail: "user@gmail.com" });
  }, 2000);
}).then((user) => {
  console.log(user);
});
console.log("-------------------------------------");

new Promise((resolve, reject) => {
  let error = 0;
  if (!error) {
    resolve({ name: "user", mail: "user@gmail.com" });
  } else {
    reject("something went wrong");
  }
})
  .then((user) => {
    console.log(user.mail);
  })
  .catch((msg) => {
    console.log(msg);
  })
  .finally(() => {
    console.log("the promise ended");
  });*/
// same task using async await
/*const promiseFive=new Promise((resolve, reject) => {
  let error = 1;
  if (!error) {
    resolve({ name: "user", mail: "user@gmail.com" });
  } else {
    reject("something went wrong");
  }
})
async function promiseConsumer() {
    try{
        user=await promiseFive
        console.log(user.mail);
        
    }catch(error){
        console.log(error);
    }
}
promiseConsumer();*/
//await => pause the execution of an async function until a Promise is settled (either resolved or rejected).
async function myFunction(){
    try {
        const response=await fetch('https://api.github.com/users/Anit-paul')
        data= await response.json()
        console.log(data.login)
    } catch (error) {
        console.log(error)
    }
}
myFunction()