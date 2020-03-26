'use strict';

var _index = require('./index');

var mortgage = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import {calculateMonthlyPayment, calculateAmortization} from './index'
// console.log(calculateAmortization)
// console.log(calculateMonthlyPayment)
console.log(mortgage);
//Here there is at least one issue, even after use babel, you need fix that

let { monthlyPayment, monthlyRate, amortization } = mortgage.calculateAmortization(principal, years, rate);