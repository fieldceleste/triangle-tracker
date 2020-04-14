import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Triangle } from './triangle-tracker.js';


$(document).ready(function () {
  $("form#triangle").submit(function (event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var number3 = parseInt($("#input3").val());
    var triangle = new Triangle(number1, number2, number3);
    triangle.checkType();
    if (triangle.result === "not a triangle") {
      $("#notatriangle").show
    } else if (triangle.result === "scalene triangle") {
      $("#scalene").show
    } else if (triangle.result === "isoceles triangle") {
      $("#isoceles").show
    }
    console.log(triangle.result)
    // if (number1 == number3 && number2 === number3) {
    //   $('#equilateral').show();
    // } else if ((number1 + number2) <= number3 || sum2 <= number2 || sum3 <= number1) {
    //   $('#notatriangle').show();
    // } else if (number1 == number3 || number2 == number3 || number1 == number2) {
    //   $('#isosceles').show();
    // } else {
    //   $('#scalene').show();
    // }
  });
});