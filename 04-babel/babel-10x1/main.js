import Mortgage from './mortage.js'
//Here there is at least one issue, even after use babel, you need fix that
// let Mortgage = require('./mortage.js')
// let principal = 200000;
// let years = 30;
// let rate = 5;
let { principal, years, rate } = new Mortgage(200000, 30, 5)
// let {principal,years, rate} = Mort
// console.log(principal)
// console.log(Mort)
// let { principal, years, rate } = Mort
// console.log(Mort)
console.log(`Principal: ${principal}`)
console.log(`Years: ${years}`)
console.log(`Rate: ${rate}`)


// console.log(Mort.monthlyPayment(principal,years, rate))
// console.log(Mort.amortization())
// let {monthlyPayment, monthlyRate, amortization} =
//     Mort(principal, years, rate)
