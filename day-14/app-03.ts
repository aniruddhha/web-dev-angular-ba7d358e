export default class Animal {

    // state
    private legs: number
    private eyes: number
    private name: string

    constructor(legs: number, eyes: number, name: string) {
        this.legs = legs
        this.eyes = eyes
        this.name = name
    }

    protected print() {
        console.log(`Legs ${this.legs}, Eyes ${this.eyes}, Name ${this.name}`)
    }
    // behaviour
    run() {
        this.legs = this.legs + 10
    }

    sleep() {
        this.eyes = 0
    }

    identify() {
        return this.name
    }
}

export const an1 = new Animal(4, 2, "abc") // object creation

export const an2 = new Animal(6, 3, "pqr") // object creation