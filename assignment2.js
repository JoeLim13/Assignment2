// "use strict";

console.log("Assignment");

var message = "Calculated Successfully";

class Calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  sum = () => this.x + this.y;

  multiplication = () => this.x * this.y;

  subtraction = function (x, y) {
    if (x <= y) {
      return "invalid";
    } else {
      return x - y;
    }
  };

  division = function (x, y = 5) {
    if (x < 0 && y < 0) {
      return "invalid";
    } else {
      return x / y;
    }
  };
}

var obj1 = new Calculator(3, 5);

function subtraction(x, y) {
  return x - y;
}

const arguments = [10, 3];

console.log(`subtraction is ${obj1.subtraction(...arguments)}`);

console.log(`division is ${obj1.division(3)}`);

console.log(
  `sum is ${obj1.sum()} & multiplication is ${obj1.multiplication()}`
);

(function (message) {
  console.log(message);
})(message);

function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3));
var arguments1 = [10, 20, 30];
console.log(add(...arguments1));
