"use strict";

//Downgrade node to 4.2 LTS && run babel
//Please run with node 12.x also and compare
//Afterwards configure Babel
var calculateMonthlyPayment = function (principal, years, rate) {
  var monthlyRate = 0;
  if (rate) {
    monthlyRate = rate / 100 / 12;
  }
  var monthlyPayment = principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), years * 12));
  return monthlyPayment;
};

var result = calculateMonthlyPayment(100000, 25, 0.5);
console.log(result);