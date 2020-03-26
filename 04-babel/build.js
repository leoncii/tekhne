'use strict';

var _mortage = require('./mortage.js');

var _mortage2 = _interopRequireDefault(_mortage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Here there is at least one issue, even after use babel, you need fix that
// let Mortgage = require('./mortage.js')
// let principal = 200000;
// let years = 30;
// let rate = 5;
let Mort = new _mortage2.default(200000, 30, 5);
// let {principal,years, rate} = Mort
// console.log(principal)
// console.log(Mort)
let { principal, years, rate } = Mort;
console.log(`Principal: ${principal}`);
console.log(`Years: ${years}`);
console.log(`Rate: ${rate}`);
// const { principal, } = Mort
// console.log(principal)

// console.log(Mort.monthlyPayment(principal,years, rate))
// console.log(Mort.amortization())
// let {monthlyPayment, monthlyRate, amortization} = 
//     Mort(principal, years, rate)
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
class Mortgage {

    constructor(principal, years, rate) {
        this.principal = principal;
        this.years = years;
        this.rate = rate;
    }

    monthlyPayment() {
        let monthlyRate = this.rate / 100 / 12;
        return this.principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), this.years * 12));
    }

    amortization() {
        let monthlyPayment = this.monthlyPayment;
        let monthlyRate = this.rate / 100 / 12;
        let balance = this.principal;
        let amortization = [];
        for (let y = 0; y < this.years; y++) {
            let interestY = 0;
            let principalY = 0;
            for (let m = 0; m < 12; m++) {
                let interestM = balance * monthlyRate;
                let principalM = monthlyPayment - interestM;
                interestY = interestY + interestM;
                principalY = principalY + principalM;
                balance = balance - principalM;
            }
            amortization.push({ principalY, interestY, balance });
        }
        return amortization;
    }
}

// module.export = Mortgage

exports.default = Mortgage;
