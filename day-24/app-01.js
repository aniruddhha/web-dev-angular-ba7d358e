const car = {  }

Object.defineProperty(car, 'speed', {
    value: 10,
    enumerable: false,
} )

Object.defineProperty(car, 'breaks', {
    value: 'urgent',
    enumerable: true,
} )

console.log(car.speed)
console.log(car)

// const ab = { a : 1 }
// console.log(ab)

for ( let key in car) {
    console.log(key)
}

const tab = { }
Object.defineProperties(tab, {
    os : {
        value : 'android',
        enumerable: true
    },
    touch : {
        value: true,
        enumerable: true
    }
})

console.log(tab)