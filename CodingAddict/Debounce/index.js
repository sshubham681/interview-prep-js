const btn = document.querySelector('.btn')

// const debounce = () => {
//   let timeoutId
//   return () => {
//     console.log(timeoutId)
//     clearTimeout(timeoutId)
//     timeoutId = setTimeout(() => {
//       console.log("You Clicked Me")
//     },2000)
//   }
// }
// btn.addEventListener('click',debounce())


const debounceFun = () => {
  let count = 0;
  setTimeout(()=> {
    console.log("clicked" + count++)
  },2000)
}
btn.addEventListener('click', debounceFun)
// delay logic
// so it runs 2s after last click
// setTimeout returns id, which pass into clearTimeout