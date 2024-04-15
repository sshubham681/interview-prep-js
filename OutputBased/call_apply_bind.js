// Question 1
const person = { name: "Shubham"}
function sayHi(age) {
  return `${this.name} is ${age}`
}

// console.log(sayHi.call(person, 29))
// console.log(sayHi.bind(person, 29))

// Question 2
const age = 10;

var user = {
  name: "Shubham",
  age: 20,
  getAge: function () {
    return this.age
  }
}
var user2 = {age: 29}

// console.log(user.getAge.call(user2))

// Question 3
var status = "😎"
setTimeout(()=> {
  const status = "😍"
  const data = {
    status: "🌶️",
    getStatus(){
      return this.status
    }
  }
  // console.log(data.getStatus()) 
  // console.log(data.getStatus.call(this)) 
}, 0)

// Question 4
const animals = [
  { species: "Lion", name: "King"},
  { species: "Whale", name: "Queen"}
]

function printAnimals(i) {
  this.print = function() {
    // console.log("#" + i + " " + this.species + ": " + this.name)
  }
  this.print()
}
for( let i= 0; i<animals.length; i++ ) {
  printAnimals.call(animals[i], i)
}

// Question 5 - Append an array to another array
const array = ["a", "b"]
const elements = [0,1,2];

array.push.apply(array, elements)
// console.log(array)

// Question 6 - Using apply to enhance Built in Functions
// Find min/max in an array

const numbers = [5,6,2,3,7]
// console.log(Math.min(numbers)) // gives NaN
console.log(Math.max.apply(null, numbers))

// Questions 7 - Bound function

// function f() {
//   console.log(this)
// }
// let user = {
//   g: f.bind(null)
// }
// user.g()
