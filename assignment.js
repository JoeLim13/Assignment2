"use strict";

console.log("Assignment");

var message = "Calculated Successfully";

function Calculator(x, y) {
  this.x = x;
  this.y = y;
  this.sum = function () {
    return this.x + this.y;
  };
  this.subtraction = function () {
    if (this.x <= this.y) {
      return "invalid";
    } else {
      return this.x - this.y;
    }
  };
  this.multiplication = function () {
    return this.x * this.y;
  };
  this.division = function () {
    if (this.x < 0 && this.y < 0) {
      return "invalid";
    } else {
      return this.x / this.y;
    }
  };
}

var obj1 = new Calculator(3, 5);

console.log(
  "sum is :" + obj1.sum(),
  "subtraction is:" + obj1.subtraction(),
  "multiplication is:" + obj1.multiplication(),
  "division is:" + obj1.division()
);

(function (message) {
  console.log(message);
})(message);
