// function add(x, y) {
//   return x + y
// }
// function multiply (x, y) {
//   return x * y
// }

// function compute(callback, x, y) {
//   return callback(x,y)
// }

// console.log(compute(add, 10, 5))
// console.log(compute(multiply, 10, 5))


// promises 


let promise = new Promise(function (resolve, reject) {
  // setTimeout(()=> resolve("Hey ya"), 2000)
  // resolve("I am done")
  reject("rejected")
})
promise.then((res)=> console.log(res)).catch((err)=> console.log(err))
console.log(promise)