// i need to gerenerate 10 random numbers

for(let i = 0 ; i < 10; i++ ) {
    const rnd = Math.floor(Math.random() * 256)
    console.log(rnd)
    console.log(rnd < 256)
}

console.log(Math.floor(4.6))
console.log(Math.round(4.6))


// f(x) = x^2 -> power rule -> 2x

const fn = (x: number) => x * x
const dfn =(x: number) => 2 * x
