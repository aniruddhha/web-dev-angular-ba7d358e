class BrandedCar {

    private speed : number

    constructor(speed: number) {
        this.speed = speed
    }

    speedUp() {
        this.speed += 30
    }

    applyBreaks() {
        this.speed -= 5
    }

    displaySpeed() {
        console.log(`Current Speed ${this.speed}`)
    }
}

const c1 = new BrandedCar(300)
c1.applyBreaks()
c1.speedUp()

const c2 = new BrandedCar(400)
c2.speedUp()