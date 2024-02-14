const person = {
    firstName : 'aaa',
    lastName: 'bbb',
    fullName : function (city, country) {
        console.log(this)
        return `${this.firstName}, ${this.lastName}, ${city}, ${country}`
    }
}

console.log(person.fullName('abc', 'pqr'))
// person.firstName = 'nnn'
// person.lastName = 'mmm'
// console.log(person.fullName('abc', 'pqr'))

const ps1 = {
    firstName : 'nnn',
    lastName :'mmm'
}

console.log(person.fullName.call(ps1, 'ct1', 'cn1'))
console.log(person.fullName(ps1, 'ct1', 'cn1'))

