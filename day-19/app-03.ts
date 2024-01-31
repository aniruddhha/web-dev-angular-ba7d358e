const arr: number[] = [100, 210, 110, 23, 60, 89, 50, 34, 23, 456]

console.log(`🟢 Original 🟢`)
console.log(arr)

const sliced1 =  arr.slice(1)
console.log(`👉 Sliced`)
console.log(sliced1)

const sliced2 = arr.slice(0, 7)
console.log(`👉 Sliced`)
console.log(sliced2)

const sliced3 = arr.slice(-1)
console.log(`👉 Sliced`)
console.log(sliced3)

const sliced4 = arr.slice(-4, -1)
console.log(`👉 Sliced`)
console.log(sliced4)

const sliced5 = arr.slice(-6, -4)
console.log(`👉 Sliced`)
console.log(sliced5)

