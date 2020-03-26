'use strict';

var _mortgage = require('./mortgage');

var mortgage = _interopRequireWildcard(_mortgage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//Here there is at least one issue, even after use babel, you need fix that

let { monthlyPayment, monthlyRate, amortization } = mortgage.calculateAmortization(principal, years, rate);