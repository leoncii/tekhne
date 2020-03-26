'use strict';

var _mortage = require('./mortage.js');

var _mortage2 = _interopRequireDefault(_mortage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Here there is at least one issue, even after use babel, you need fix that

// let principal = 200000;
let years = 30;
let rate = 5;
let Mort = new _mortage2.default(1000, years, rate);
// let {principal,years, rate} = Mort
// console.log(principal)
console.log(Mort);
const { principal } = Mort;
console.log(principal);

// console.log(Mort.monthlyPayment(principal,years, rate))
// console.log(Mort.amortization())
// let {monthlyPayment, monthlyRate, amortization} = 
//     Mort(principal, years, rate)
