function logIt(target: any) {
    console.log(`Hi this one is special`)
}

@logIt
class Hello {
    helloWorld() {
        console.log(`Welcome to Typescript Magic`)
    }
}

const hl = new Hello()
hl.helloWorld()