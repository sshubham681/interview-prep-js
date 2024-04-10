// forEach
const arr = [0,2,3,4,5]

arr.forEach((el) => console.log(el))

function printNumber(el) {
  console.log(el)
}

Array.prototype.myForEach = function(cb) {
  for(let i=0; i<this.length; i++) {
    cb(this[i])
  }
}

arr.myForEach(printNumber)


// Map
Array.prototype.myMap = function(cb) {
  let res=[];
  for(let i=0; i<this.length; i++) {
    res.push(cb(this[i]))
  }
  return res
}

const res = arr.myMap((el) => el*2)
console.log(res)