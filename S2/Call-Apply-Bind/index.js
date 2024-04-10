let name1 = {
  firstName: "Shubham",
  lastName: "Verma",
  // printFullName: function () {
  //   console.log(`${this.firstName} ${this.lastName}`)
  // }
}

let printFullName = function (hometown, state) {
  console.log(`${this.firstName} ${this.lastName} from ${hometown} (${state})`)
}

// name1.printFullName()
printFullName.call(name1, "Kurukshetra", "Hayana")

let name2 = {
  firstName: "Sahil",
  lastName: "Gupta",
}
let name3 = {
  firstName: "Rohit",
  lastName: "Verma",
}

// function borrowing
// name1.printFullName.call(name2)
printFullName.call(name2, "Yamunanagar","Delhi")

// Apply in js -- The only diff b/w call and apply is how we pass the arguments (in apply we pass as array)
printFullName.apply(name2, ["Yamunanagar","Delhi"])

// Bind method -- The only diff b/w call and bind is, instead of calling directly it binds with the object and returns a copy

let printMyName = printFullName.bind(name3, "Rohit", "UP")
printMyName()