abstract class Shape {
    abstract calculateArea() : number
}

class Triangle extends Shape {

    private b : number
    private h : number

    constructor(b :number, h: number) {
        super()
        this.b = b
        this.h = h
    }

    calculateArea(): number {
        return 0.5 * this.b * this.h
    }
}

class Circle extends Shape {
    private r : number

    constructor(r : number) {
        super()
        this.r  = r
    }

    calculateArea(): number {
        return 3.14 * this.r * this.r
    }
}

const sh1: Shape = new Triangle(18, 90)
console.log(sh1.calculateArea())

const sh2: Circle = new Circle(90)
console.log(sh2.calculateArea())

function showArea(sh : Shape) {
    return sh.calculateArea()
}

showArea(sh1)
showArea(sh2)