function sayHello() {
    const dt = new Date()
    parseInt('120')

    this.caps = function() {

    }

    this.caps()
}

//  class -> state + behaviour

// car will have speed
// car can speedup and apply breaks
function Car(speed) { // constructor function
    this.speed = speed // state

    this.applyBreaks = function() { // behavour
        this.speed -= 10
    }

    this.speedUp = function() {
        this.speed += 10
    }
}

const c1 = new Car(10) // object 
c1.applyBreaks()
c1.speedUp()

class TopCar {
    constructor(speed) {
        this.speed = speed
    }

    speedUp() {
        this.speed += 30
    }

    applyBreaks() {
        this.speed -= 5
    }
}

