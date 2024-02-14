function greet(age) {
    return `hello name is ${this.name} and age is ${age}`
}

const person = {
    name : 'abc',
    age: 20
}

console.log(greet.apply(person, [30]))