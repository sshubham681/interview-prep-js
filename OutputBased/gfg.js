// ------- q1
// let x = {
//   b: 1,
//   c: 2
// }
// let y = Object.keys(x)
// console.log(y)

// ------- q2
// let x = '{"b": 1, "c": 2}'
// let y = JSON.parse(x)
// console.log(typeof y);

// ------- q3
// let x = 0.1 + 0.2
// let y = 0.3
// console.log(x==y)

// ------- q4
// let x = 1 > 2 > 3;
// console.log(x)

// ------- q5
// let x = false
// let y = "0"
// let z = 0;
// console.log(x == y)
// console.log(x == z)

// ------- q6
// let x = []
// console.log(Boolean(x))

// ------- q7
// let x = Infinity;
// console.log(typeof x)

// ------- q8
// let x = "5"
// let y = 2
// console.log(x + y)
// console.log(x - y)

// ------- q9
// let a = () => {
//   console.log(this)
// }
// a()

// ------- q10
// let x = "Hello"
// let y = new String("Hello")
// console.log(x == y)
// console.log(x === y)
// console.log(typeof x)
// console.log(typeof y)

// ------- q11
// let x = []
// let y = []
// let z = x + y
// console.log(typeof x)
// console.log(typeof z)

// ------- q12
// let x = [1,2,3,4,5]
// let y = x.filter((n) => n>=3)
// console.log(y)

// ------- q13
// let x = true
// let y = false
// let z = x + y && x * y
// console.log(z)
// // console.log(x + y)
// // console.log(x * y)

// ------- q14
// function foo(a, b) {
//   console.log(arguments)
// }
// foo(3)

// ------- q15
// let x = "false"
// // console.log(Boolean(x))
// let y = !x
// console.log(y)

// ------- q16
// let x = 1
// let y = "1"
// console.log(++x, ++y)

// ------- q17
// var num = 8
// var num = 10
// console.log(num)

// ------- q18
// let x = "b"
// let y = "a"
// console.log(x + y + + y + y)

// ------- q19
// console.log(x)
// var x

// ------- q20
// let x = true + true
// let y = x + false
// console.log(y)

// ------- q21
// let x = [2]
// let y = 2
// console.log(x == y)

// ------- q22
// let x = [1, 2, 3]
// console.log(typeof x)

// ------- q23
// const a = { b: {c: 2}}
// const b = {...a}
// a.b.c = 3
// console.log(b.b.c)

// ------- q24
// let x = [1, 2, 3]
// let [, , y] = x
// console.log(y)

// ------- q25
// let x = {a: 1, b: 2}
// let y = {b: 3}
// let z = {...x, ...y}
// console.log(z)

// ------- q26
// let x = [1,2,3]
// let y = x.map((num) => {
//   x.push(num + 3)
//   return num + 1
// })
// console.log(x)
// console.log(y)

// ------- q27
// let arr = [1,2,3]
// arr[10] = 4
// console.log(arr.length)
// arr.forEach((el, index)=> console.log(`${index} -> ${el}`))

// ------- q28
// let x = {a: 1}
// let z = {a: 1}
// let y = Object.assign({}, x)
// console.log(x === z)
// console.log(y)

// ------- q29
// let x = [1,2,3,5]
// x.forEach((e)=> {
//   if(e>2 && e<5) return;
//   console.log(e)
// })

// ------- q30
// let x = 10;
// let y = 20;
// console.log("total = " + x + y)

// ------- q31
// let x = 5;
// let y = 6;
// x += x > y ? x : y
// console.log(x)

// ------- q32
// const arr = [1,2,3]
// arr.forEach((num) => num*2)
// console.log(arr)

// ------- q33
// let a = [1,2,5]
// a.push(a[1]++)
// console.log(a)

// ------- q34
// let x 
// console.log(x)

// ------- q35
// let x = {
//   y: "z",
//   print : () => {
//     console.log(this.y)
//     return this.y === 'z'
//   }
// }
// console.log(x.print())

// ------- q36
// let x = [1,2,3]
// let y = x.join("")
// console.log(y)
// console.log(typeof y)

// ------- q37
// let margin = "10px"
// let x = parseInt(margin)
// console.log(x)
// console.log(parseInt(x))

// ------- q38
// setTimeout(()=> {
//   console.log(1)
// },0)
// console.log(2)

// ------- q39
// let x = [1, 2, 3]
// let y = x.map((x, i) => x + i)
// console.log(y)

// ------- q40
// let x = [null, 0, "0", false, "a"]
// let y = x.filter((value)=> value)
// console.log(y)

// ------- q41
// let x = true
// let y = false
// console.log(x + y)

// ------- q42
// let x = ["apple", "banana", "cherry"]
// let y = x.filter((i) => i.startsWith("b"))
// console.log(y)

// ------- q43
// let x = 10.7
// let y = parseInt(x)
// console.log(y)

// ------- q44
// let x = 1;
// console.log(x + x++)

// ------- q45
// let x = [1]
// let y = x + 1;
// console.log(y)

// ------- q46
// let x = 7;
// let y = !!x && !!!x
// console.log(y)

// ------- q47
// let a = 10;
// let b = (a, a + 10)
// console.log(b)

// ------- q48
// let x = "5"
// let y = 3
// console.log(x - y)

// ------- q49
// let x = 7
// let y = (typeof x).length
// console.log(y)

// ------- q50
// let x = 6
// let y = typeof (x == 6)
// console.log(y)

// ------- q51
// let x = [1,2,3]
// let y = x.slice()
// console.log(y, x === y)

// ------- q52
// let x = () => {
//   return {
//     y: "z"
//   }
// }
// console.log(typeof x().y)

// ------- q53
// const a = [1, 2, 3]
// const b = [...a]
// b.push(4)
// console.log(a)

// ------- q54
// let x = [30,11,31,2,10]  // this will convert to string and add digits of single value and then sort
// x.sort()
// console.log(x)

// ------- q55
// let x = 0;
// let y = "0"
// console.log(false == x)
// console.log(false == y)

// ------- q56
// let x = 018
// let y = 015
// console.log(x - y)

// ------- q57
// let a = [1,2,3]
// let b = [4,5,6]
// console.log(a + b)

// ------- q58
// let x = [1, 2, 3, 4]
// let [a, ...b] = x.reverse()
// console.log(b)

// ------- q59
// const x = true
// const y = 1
// console.log(x == y, x === y)

// ------- q60
// let x = (()=> {
//   return 9
// })()

// console.log(x)

// ------- q61
// let x = [1,2,3]
// console.log(x.concat(4,5))