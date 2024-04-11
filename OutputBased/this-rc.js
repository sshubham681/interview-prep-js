// Question 1
const user = {
  firstName: "Shubham",
  getName() {
    const firstName = "Verma"
    return this.firstName
  }
}
// console.log(user.getName())  

// Question 2
function makeUser() {
  return {
    name: "John",
    ref: this,
    // ref() {
    //   return this
    // }
  }
}
let cust = makeUser();
// console.log(cust.ref.name)
// console.log(cust.ref().name)

// Question 3
const data = {
  name: "Shubham Verma! Question 3",
  logMessage() {
    console.log(this.name)
  }
}
// setTimeout(data.logMessage,1000)

// fix for question 3
// setTimeout(()=>{
//   data.logMessage()
// }, 1000)

// Question 4
const person = {
  name:"Shubham",
  greet() {
    return `Hello ${this.name}!`
  },
  farewell: () => {
    return `GoodBye ${this.name}`
  }
}
console.log(person.greet())
console.log(person.farewell())

// Question 5
let calculator = {
  read() {
    this.a = +prompt("a = ",0)
    this.b = +prompt("b = ",0)
  },
  sum() {
    return this.a +this.b
  },
  mul() {
    return this.a * this.b
  }
}
// calculator.read()
// console.log(calculator.sum())
// console.log(calculator.mul())

// Question 6
var length = 4;
function cb() {
  console.log(this.length)
}
const object = {
  length: 5,
  method(fn) { // argument = [cb, 2, 3]
    // fn()
    console.log(arguments)
    arguments[0]()
  }
}
object.method(cb, 2, 3)


// Question 7
const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(a) {
    this.total *= a
    return this
  },
  subtract(a) {
    this.total -= a;
    return this
  }
}
const result = calc.add(10).multiply(5).subtract(30).add(10)
console.log(result.total)

// ---------------
// let user ={
//   name: "Shubham",
//   age: 28,
//   getDetails () {
//     // console.log(this)
//     const nestedArrow = () => console.log(this);
//     nestedArrow()
//   },
//   // childObj: {
//   //   name: "child",
//   //   getDetails: () => {
//   //     console.log(this.name)
//   //   }
//   // },
// }

// user.getDetails()

// -----------------
// class User {
//   constructor(n) {
//     this.name = n;
//   }
//   getName() {
//     console.log(this.name)
//   }
// }
// const user = new User("Shubham Verma")
// user.getName()