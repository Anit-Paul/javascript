//IIFE : Immediately Invoked Function Expressions (function_description)()
// when we use two iife we need to use ;
// Avoid polluting the global scope
/*
(function () {
  const message = "Hello from IIFE!";
  console.log(message);
})();

// console.log(message); ❌ Error: message is not defined
*/
((a) => console.log(`hello ${a}`))("anit");
