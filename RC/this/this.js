// ------- confusing one
// this.a = 5;

// function getParam() {
//   const a = 11;
//   console.log(this.a);
// }
// const name = "outer";
// const myName = "hey";
// const getValue = () => {
//   const name = "Shubham";
//   console.log(this.name);
// };
// getParam();
// getValue();
(name = "outer"), (newName = "outmost");
let user = {
  name: "Shubham",
  age: 28,
  childObj: {
    newName: "updated Name",
    name: "hey",
    getDetails() {
      console.log(this.newName, "and ", this.name);
      //   const nestedArrow = () => console.log(this.name);
      //   nestedArrow();
    },

    // getDetails: () => {
    //   console.log(this.newName, "and ", this.name);
    // },
  },
};

user.childObj.getDetails();
