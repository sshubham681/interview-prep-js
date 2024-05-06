"use strict"
// # this in global scope

console.log(this) // globalObject window(in browser), global(in node js)

// this inside a function
function x() {
  // the value depends upon strict/non-strict mode, undefined in strict mode
  console.log(this)
}

// # this in non strict mode - (this substitution)
// if the value of this is undefined or null, this keyword will be replaced with globalObject only in non strict mode


// [strict mode]: this value depends on how the function is called (window)
x() // undefined
window.x() // in this way it will have window object / globalObject


const obj = {
  a: 10,
  x: function () {
    console.log(this)  // this will point to current object obj
    console.log(this.a) // print '10'
    console.log(this.x) // print entire function
  }
}

obj.x()

const student = {
  name: 'Shubham',
  printName: function() {
    console.log(this.name)
  }
}
student.printName() // print "Shubham"

const student2 = {
  name: "Sahil"
}

// call, apply bind methods (sharing methods)

student.printName.call(student2) // print "Sahil"

// # this inside arrow function

const arrowObj = {
  a: 10,
  x: () => {
    console.log(this) // window object
    console.log(this.a)
  }
}
arrowObj.x() // window object

// # this inside nested arrow function

const nesArrowObj = {
  a: 55,
  x: function () {
    let a = 100
    const y = () => {
      console.log(this.a)
    }
    y()
  }
}
nesArrowObj.x() // window object

// # this inside DOM => reference to HTML element

// #this inside class constructor
