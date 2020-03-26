import Mortgage from './mortgage.js'

//Here there is at least one issue, even after use babel, you need fix that
//crear un objeto a partir de mortage

let principal = 200000
let years = 30
let rate = 5
let mort = new Mortgage(principal,years,rate)
console.log(mort.amortization)

// console.log(`Principal: ${principal} Years: ${years} Rate: ${rate}`)

// let {
//   monthlyPayment,
//   monthlyRate,
//   amortization,
// } = Mortgage.(principal, years, rate)
