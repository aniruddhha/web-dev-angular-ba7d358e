const a  = 90
const b = true

console.log(`Type of a is ${typeof a}`)

type Simple = { a : number, b : boolean }
interface AgainSimple { a : number, b : boolean }

// const obj = { a, b }
// const obj: Simple = { a, b }
const obj: AgainSimple = { a, b }
console.log(typeof obj)



