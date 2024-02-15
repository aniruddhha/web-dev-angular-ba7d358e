const obj = { }

Object.defineProperty(obj, 'a', {
    value : 10,
    enumerable: true,
    writable: true
})

Object.defineProperty(obj, 'b', {
    value : 30,
    enumerable: true,
    writable: true,
    configurable: true
})

obj.a = 20
console.log(obj)

delete obj.b

console.log(obj)

