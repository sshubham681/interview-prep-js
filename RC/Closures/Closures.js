// var addSix = createBase(6);
// addSix(10) // returns 16
// addSix(21); //returns 27

function createBase(num) {
  return function (innerNum) {
    console.log(innerNum + num);
  };
}

var addSix = createBase(6);
addSix(10);
addSix(21);
// function outer() {
//   let name = "Hey";

//   function inner() {
//     console.log(name);
//   }

//   inner();
// }
// outer();

// link - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
