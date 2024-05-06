// -------- Question 1: map vs forEach

// const array = [2,5,3,4,7]

// const mapResult = array.map((arr)=>{
//   return arr + 2
// })
// console.log(mapResult)
// const forEachResult = array.forEach((arr)=>{
//   return arr * 2
// })
// console.log(array)

// -------- Question 2: null vs undefined

// console.log(typeof null)
// console.log(typeof undefined)

// console.log(null == undefined)
// console.log(null === undefined)

// ------ Question 3 - Event Delegation ---------

// ------ Question 4 - Flatten an array -----------

let arr = [
  [1, 2],
  [3, 4],
  [5,6, [7,8],9],
  [10,11,12]
]

// let flattened = [].concat(...arr)
// console.log(flattened)

// console.log(arr.flat(2))

function customFlat(arr, depth = 1) {
  let result = []
  arr.forEach(a=>{
    if(Array.isArray(a) && depth > 0) {
      result.push(...customFlat(a, depth - 1))
    } else result.push(a)
  })
  return result
}
console.log(customFlat(arr, 2))