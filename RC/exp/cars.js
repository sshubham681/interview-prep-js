// Question 1 - Hoisting
// function abc() {
//   console.log(a)
//   var a = 10;
// }
// abc()


// ------ Question 2 ------------
// var obj = {
//   name: "Shubham",
//   display: () => {
//     console.log(this)
//   }
//   // display: function() {
//   //   console.log(this.name)
//   // }
// }
// var obj1 = {
//   name: "ABC"
// }
// obj.display.call(obj1)

// ------- Question 3: Implement Caching/ Memoize Function ----------

// const clumsyProduct = (num1, num2) => {
//   for(let i=1; i <= 100000000; i++) {}
//   return num1*num2
// }

// solution
// function myMemoize(fn, context) {
//   const res = {};
//   return function(...args) {
//     var argsCache = JSON.stringify(args)
//     if(!res[argsCache]) {
//       res[argsCache] = fn.call(context || this, ...args)
//     }
//     return res[argsCache]
//   }
// }
// const memoizedClumsyProduct = myMemoize(clumsyProduct)

// console.time("first call")
// console.log(memoizedClumsyProduct(9467,7649))
// console.timeEnd("first call")

// console.time("second call")
// console.log(memoizedClumsyProduct(9467,7649))
// console.timeEnd("second call")

// Question 4 Event Loop --------

// console.log("a")
// setTimeout(()=> console.log("set"), 0)
// Promise.resolve(()=> console.log("pro")).then((res)=> res())
// console.log("b")

// https://www.jsv9000.app/

// -------- Question 5 Infinite Currying -------
// function add(a) {
//   return function (b) {
//     if(b) return add(a+b)
//     return a
//   }
// }
// console.log(add(5)(2)(4)(8)())

// Question 6 Implement below code

const calc = {
  total: 0,
  add(a) {
    this.total = this.total + a
    return this
  },
  multiply(a) {
    this.total *= a
    return this
  },
  subtract(a) {
    this.total -= a
    return this
  }
}
const result = calc.add(10).multiply(5).subtract(30).add(10)
console.log(result.total)
