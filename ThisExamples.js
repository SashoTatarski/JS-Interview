const person = {
  name: 'Sasho',
  talk() {
    setTimeout(
      function () {
        console.log('this in setTimeout', this.name);
      }.bind(this),
      1000
    );
  },
};
//person.talk();

const person2 = { name: 'Pesho' };
const getName = person.talk.bind(person2);
getName();

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

// const person = {
//   name: 'Sasho',
//   talk() {
//     setTimeout(function() {
//       console.log('this in setTimeout', this.name)
//     }.bind(this), 1000)
//   }
// }
// //person.talk();

// const person2 = {name: 'Pesho'};
// const person2Talk = person.talk.bind(person2);
// person2Talk();

// const person = {
//   name: 'Sasho',
//   walk() {
//     console.log(this.name)
//   }
// }

// person.walk();
