//Abstract Methods without classes
//NOT the best way, using abstract without prototypes or classes
let abstractClass = {
  abstractMethod: function() {
    /* i don't know yet what i'm going to do */
  },
  concreteMethod: function() {
    this.abstractMethod() // < made generic with this
  },
}
let specializedClass = Object.create(abstractClass)
specializedClass.abstractMethod = function() {
  console.log('Now i know what to do')
}
specializedClass.concreteMethod()

class abstractClass1 {
    constructor() {

    }
    abstractMethod1() {}
    concreteMethod1() {
        this.abstractMethod1()
    }
}

let newAbstract = new abstractClass1()

newAbstract.abstractMethod1 = function() {
    console.log(`${}`)
}

newAbstract.concreteMethod1()


