// Business (or back-end) logic:

// var sum1 = function(number1, number2) {
//   return number1 + number2;
// };

// var sum2 = function(number1, number3) {
//   return number1 + number3;
// };

// var sum3 = function(number2, number3) {
//   return number2 + number3;
// };

export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.result = "";
  debugger;
}

Triangle.prototype.checkType = function () {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    this.result = "not a triangle";
  } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
    this.result = "scalene triangle";
  } else if ((this.side1 === this.side2) || ((this.side1 === this.side3)) || ((this.side2 === this.side3))) {
    this.result = "isosceles triangle";
  }
};
