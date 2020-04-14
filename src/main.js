$(document).ready(function() {
  $("form#triangle").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var number3 = parseInt($("#input3").val());
        
    if (number1==number3&&number2===number3) {
      $('#equilateral').show();
      } else if ((number1 + number2)<= number3||sum2<=number2||sum3<= number1) {
      $('#notatriangle').show();
      } else if (number1==number3||number2==number3||number1==number2) {
      $('#isosceles').show();
      } else {
      $('#scalene').show(); 
      }
    });
  });