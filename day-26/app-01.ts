class Car {

    private speed: number;
    private make: string;
    private model: string;
    private mfg: Date;

    constructor(speed: number, make: string, model: string, mfg: Date) {
        this.speed = speed
        this.make = make
        this.model = model
        this.mfg = mfg
    }

    setMake(make: string) {
        this.make = make.toLowerCase()
    }

}

const c = new Car(144, 'aaa', 'bbb', new Date())
// c.make = 'abc'
c.setMake('vvv')

class Bmw extends Car {

    private cruizeControl: boolean;

    constructor(
        speed: number, 
        make: string, 
        model: string, 
        mfg: Date, 
        cruizeControl: boolean
    ) {
        super(speed, make, model, mfg)
        this.cruizeControl = cruizeControl
    }

    setMake(make: string): void { // overriding
        // super.setMake(make.toLowerCase())
    }

}

const bmw1 = new Bmw(100, 'rrr', 'mmm', new Date(), true)
bmw1.setMake('jjj')