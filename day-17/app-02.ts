// es6
const obj = {
    make : 'abc',
    model : 123
}

// const make: string = obj.make
// const model: number = obj.model

// const make: string = obj['make']
// const model: number = obj['model']

// es6 : Object Destructuring => Property Shorthand notation
const { make, model } = obj

console.log(`Make ${make}, Model ${model}`)

