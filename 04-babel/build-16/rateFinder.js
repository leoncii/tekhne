'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _rates = require('./rates.json');

var _rates2 = _interopRequireDefault(_rates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Please complete this file in order to read rates.json and build a html response
//TIP: You will need to use readFileSync method

let rawdata = _fs2.default.readFileSync(_rates2.default);
let rates = JSON.parse(rawdata);
let html = '';
rates.forEach(rate => html += `<tr><td>${rate.name}</td><td>${rate.years}</td><td>${rate.rate}%</td></tr>`);
console.log(html);