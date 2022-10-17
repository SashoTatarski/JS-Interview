class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log('move');
  }
}

class Cirle extends Shape {
  #radius;

  constructor(color, radius) {
    super(color);
    this.#radius = radius;
  }

  move() {
    // Inhereted move
    super.move();
    // Overridden move
    console.log('Circle move');
  }

  get radius() {
    return this.#radius;
  }

  set radius(value) {
    if (value <= 0) throw new Error('Invalid radius');

    this.#radius = value;
  }
}

const c = new Stack('red', 1);
c.radius;

// -------------------------------------------- //

// Design a class for employee which takes id and name during construction and has a salary property
// Design a class for manager which is employee and can have department property

// class Employee {
//     #id;
//     #name;
//     #salary;
//     constructor(id, name) {
//       if (!id || !name)
//         throw new Error('Employee id and name are mandatory');

//       this.#id = id;
//       this.#name = name;
//     }

//     setName(name) {
//       this.#name = name;
//     }

//     setSalary(salary) {
//       this.#salary = salary;
//     }

//     getName() {
//       return this.#name;
//     }

//     getId() {
//       return this.#id;
//     }

//     getSalary() {
//       return this.#salary;
//     }
//   }

//   class Manager extends Employee {
//     setDepartment(name) {
//       this.department = name;
//     }

//     getDepartment() {
//       return this.department;
//     }
//   }

//   const employee = new Employee(1, 'Sasho');
//   employee.setSalary(1000);

//   const manager = new Manager(2, 'Gosho');

//--------------------------------------------------------------------------- //

// function Employee(id, name) {
//   if (!id || !name)
//     throw new Error('Employee id and name are mandatory');

//   this.id = id;
//   this.name = name;
// }

// Employee.prototype.setSalary = function (salary) {
//   this.salary = salary;
// };

// Employee.prototype.getName = function (name) {
//   return this.name;
// };

// Employee.prototype.getId = function (id) {
//   return this.id;
// };

// Employee.prototype.getSalary = function (salary) {
//   return this.salary;
// };

// function Manager(params) {
//   Employee.apply(this, arguments);
// }

// Manager.prototype = Object.create(Employee.prototype);
// Manager.prototype.constructor = Manager;

// Manager.prototype.setDepartment = function (name) {
//   this.department = name;
// };

// Manager.prototype.getDepartment = function () {
//   return this.department;
// };

// const employee = new Employee(1, 'Sasho');
// employee.setSalary(1000);

// const manager = new Manager(2, 'Gosho');
