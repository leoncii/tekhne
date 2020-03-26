import * as mortgage from './index';
// import {calculateMonthlyPayment, calculateAmortization} from './index'
// console.log(calculateAmortization)
// console.log(calculateMonthlyPayment)
console.log(mortgage)
//Here there is at least one issue, even after use babel, you need fix that

let {monthlyPayment, monthlyRate, amortization} = 
    mortgage.calculateAmortization(principal, years, rate);

