//Sample of Constructor Function Pattern
let Flight = require('./flight');
//console.log(flight);
let flight = new Flight();
flight.setNumber(7772);
flight.setOrigin('Cochabamba');
flight.setDestination('Utah');

console.log(flight.getInfo());

//let AnotherFlight = require('./flight');
let anotherFlight = new Flight();
console.log(anotherFlight.getInfo());

let palindrome = require('./palindrome')

let info = new palindrome()
let pa = info.isPal('1112')
console.log(pa) //true || false
