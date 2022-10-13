// Step 1
const person = {
  name: 'Sasho',
  talk() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};
person.talk();

// Step 2 - call
// const getName = person.talk;
// person2 = { name: 'Gosho', getName };
// person2.getName();

// const person2 = { name: 'Gosho' };
// person.talk.call(person2);
// person2.talk;

// Step 3 - Bind
// const person2 = { name: 'Gosho' };
// const getName = person.talk.bind(person2);
// getName();

// ----------------------------------------------------- //

// const myCar = {
//   color: "Blue",
//   logColor: function() {
//       var self = this;
//       console.log("In logColor - this.color: " + this.color);
//       console.log("In logColor - self.color: " + self.color);
//       (() => {
//           console.log("In IIFE - this.color: " + this.color);
//           console.log("In IIFE - self.color: " + self.color);
//       })();
//   }
// };

// myCar.logColor();


