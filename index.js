// // Scope, hoisting, Execution context, call stack, temporal dead zone

// // Temporal dead zone
// // console.log(a);

// let a = 1;

// b();

// function b() {
//   let a = 2;
//   c();
//   function c() {
//     let a = 3;
//     d();
//     function d() {
// //       Prints from closure and not TDZ
//     console.log(a);
//   }
//   }
// }

// ------------------------------------------

// // Block scope
// var a = 1;
// let b = 2;
// {
//   var a = 3;
//   let b = 4;
//   const c = 5;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// // Reference error since the block is destroyed after closing parentheses
// console.log(c);

// ------------------------------------------

// // Closures

// function x() {
//   var a = 1;
//   function b() {
//     console.log(a);
//   };
//   return b;
// }

// var z = x();

// z();

// ------------------------------------------

// Set timeout with closures

// Q. Write a program that prints from 1 to 5 in 1 second intervals

for (var i = 1; i <= 5; i++) {
  function printAfterASecond(x) {
//     printAfterASecond function forms a closure around setTimeout
    setTimeout(function() {
      console.log(x);
    }, x * 1000);
  }
  printAfterASecond(i);
}
