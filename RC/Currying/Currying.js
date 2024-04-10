// https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more


// function f(a){
//     return function(b){
//         console.log(a, b);
//     }
// }
// f(10)(20);

// ------ sum(10)(20)(30)

// function sum(a){
//     return function (b){
//         return function (c){
//             return a+b+c;
//         }
//     }
// }

// console.log(sum(10)(20)(30));


//  Question 2
// Evaluate("sum")(4)(2) =>6
// Evaluate("multiply")(4)(2) => 8
// Evaluate("divide")(4)(2) => 2
// Evaluate("subtract")(4)(2) => 2

// function evaluate(operation){
//     return function (a){
//         return function (b){
//             if(operation === "sum"){
//                 return a+b;
//             } else if(operation == "multiply"){
//                 return a*b;
//             } else if(operation === "divide"){
//                 return a/b;
//             } else if(operation === "substract"){
//                 return a-b;
//             } else {
//                 return "NO VALID INPUT"
//             }
//         }
//     }
// }
// const mul = evaluate("multiply");
// // we can initialize and then can reuse it
// console.log(mul(4)(5)); //20
// console.log(mul(2)(9)); //18
// console.log(evaluate("multiply")(4)(2));

// infinite currying

// function sum(a){
//     return function(b){
//         if(b){
//             return sum(a+b);
//         }
//         return a;
//     }
// }
// console.log(sum(5)(6)(3)(9)())

// ----- currying vs Partial Application
// this is partial application example

// function sum(a){
//     return function(b,c){
//         return a+b+c
//     }
// }

// const x = sum(10);
// console.log(x(5,4))

//  ---- this will change text of the text
// function updateElementText(id){
//     return function(content){
//         document.querySelector('#' +id).textContent = content;
//     }
// }

// const updateHeader = updateElementText("myText");
// updateHeader("Hello Shubham")

// ---- convert f(a,b,c) into f(a)(b)(c)
function currying (func){
    return function curriedFunction(...args){
        if(args.length >= func.length){
            return func(...args)
        } else {
            return function (...next){
                return curriedFunction(...args, ...next)
            }
        }
    }
}

const sum = (a, b, c, d) => a + b + c + d;
const totalSum = currying(sum);
console.log(totalSum(1)(6)(5)(6));