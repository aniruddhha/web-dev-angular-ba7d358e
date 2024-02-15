const obj = {
    a : 1,
    b : 2
}
console.log(obj)

const desc = Object.getOwnPropertyDescriptor(obj, 'a')
console.log(desc)

delete obj.b
console.log(obj)



