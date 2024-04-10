// const card = ["shirt", "shoes", "kurta"];

// createOrder(cart,function (orderId) {   // returns orderId
//     proceedToPayment(orderId)
// })

// const promise = createOrder(cart)

// promise.then(function (orderId) {
//     proceedToPayment(orderId)
// });

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (payment) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  });

//   same below one with arrow function, without return keyword
createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((paymentInfo) => updateWalletBalance(paymentInfo));

// // { data:undefined }

const GITHU_API = "https://api.github.com/users";

const user = fetch(GITHU_API);

console.log(user);

user.then(function (response) {
  console.log(response);
});

// Promise is an object representing the eventual completion or failure of an async operation.

// Promises are placeholder/container for future value which will be getting after async operations


// 1. What are Promises?
// Promises are objects which are used to perform asynchronous operations. They are just like placeholders to store a future value that will be returned after some time. They contain two properties: PromiseState and PromiseResult.

//  2. Importance of Promises:
// a) Promises can help us to write trust worthy code.
// b) Promises are used to solve the problems of callbacks like inversion of control and callback hell.
// c) They give us the result prompt in three states: 1) Pending 2) Fulfilled 3) Rejected
// d) We can attach function to promise object and retrieve its value unlike callbacks no need to pass the function.
// e) Nesting can be done in Promises and with the help of that we can return the values in each individual chain.
