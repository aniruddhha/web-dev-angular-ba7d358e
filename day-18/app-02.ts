console.log(`🟢 Ternary 🟢`)

const a1 = 20
const nm = a1 > 20 ? 'abc' : 'pqr'
console.log(nm)

const b1 : string | null = null

console.log(`🟢 Nullish Coalescing 🟢`)
console.log(`Hello I am ${b1 ?? 'abc' }`)