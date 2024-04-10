// const user = {
//   name: "Shubham",
//   age: 28,
//   "my address": "KKR",
// };

// user.name = "Verma";
// // delete user.age;
// delete user["my address"];
// console.log(user["my address"]);

// const func = (function (a) {
//   delete a;
//   return a;
// })(5);

// console.log(func);

// ----- Dynamic Key Value Pair

// const property = "firstName";
// const name = "Shubham";

// const user = {
//   [property]: name,
// };

// console.log(user);

// ----- Looping through Objects

// const user = {
//   name: "Shubham",
//   age: 28,
//   isTotallyAwesome: true,
// };

// for (key in user) {
//   console.log(user[key]);
// }

// ------ Output Based Questions

// const obj = {
//   a: "One",
//   b: "Two",
//   a: "Three",
// };
// console.log(obj);

// ------ Create a function multiplyByTwo(obj) that multiplies all numeric property values of   nums by 2

// let nums = {
//   a: 100,
//   b: 200,
//   title: "My Nums",
// };

// const multiplyNumeric = (obj) => {
//   for (key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// };

// multiplyNumeric(nums);

// console.log(nums);

// ------ Output Based

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);
// // console.log(a);

// ------- What is JSON.stringify and JSON.parse ?

// const user = {
//   name: "Shubham",
//   age: 28,
// };
// console.log(user);
// console.log(JSON.stringify(user));

// ------ Spread Operator

// console.log([..."Shubham"]);

// const user = { name: "Shubham", age: 28 };
// const admin = { admin: true, ...user };

// console.log(admin);

// ---output based

// const settings = {
//   username: "Shubham",
//   level: 28,
//   health: 90,
// };
// const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data);

// ---output based
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

//  ----- Destructuring in Objects

// let user = {
//   name: "Shubham",
//   age: 28,
//   address: {
//     city: "KKR",
//     state: "HRY",
//   },
// };
// const name = "hey";

// const { name: myName } = user; // for changing name

// const {
//   address: { city },
// } = user;

// console.log(myName, city);

// ------ Output based

// function getItems(fruitList, favouriteFruit, ...args) {
//   return [...fruitList, ...args, favouriteFruit];
// }

// console.log(getItems(["Banana", "Apple"], "Pear", "Orange"));

// -------- Output Based
// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);

// -------- Output Based
// console.log({ a: 1 } == { a: 1 });
// console.log({ a: 1 } === { a: 1 });

// ----Output based
// let person = { name: "Shubham" };
// const members = [person];
// person = null;
// console.log(members);

// -----Output Based

// const value = { number: 10 };
// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };
// multiply();
// multiply();
// multiply(value);
// multiply(value);

//  ------ Output Based
// function changeAgeAndReference(person) {
//   person.age = 25;
//   person = {
//     name: "John",
//     age: 19,
//   };
//   return person;
// }
// const personObj1 = {
//   name: "Alex",
//   age: 30,
// };

// const personObj2 = changeAgeAndReference(personObj1);
// console.log(personObj1);
// console.log(personObj2);

//  ------ Shallow Copy and Deep Copy

// let user = {
//   name: "Shubahm",
//   age: 28,
// };

// // const objClone = Object.assign({}, user); // first way
// // const objClone = JSON.parse(JSON.stringify(user)); //second way
// const objClone = { ...user }; // third way
// user.name = "Changed";
// console.log(user, objClone);
