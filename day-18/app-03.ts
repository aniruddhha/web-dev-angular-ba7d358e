const url = `https://aniruddhakudalkar.com`

function connect(url : string): void {
    console.log(`Connecting to ${url}`)
}

connect(url)

const anConnect: (u: string) => void = function(url : string): void {
    console.log(`Connecting to ${url}`)
}

anConnect(url)

//es6 : arrow function 
// => this symbol is called fat arrow or simply arrow

type ConFn = (u: string) => void // just a shape

const arConnect1: ConFn  = (url: string): void => {
    console.log(`Connecting to ${url}`)
}
arConnect1(url)

const arConnect2: (u: string) => void = (url : string): void => console.log(`Connecting to ${url}`)
arConnect2(url)

const arConnect3: ConFn = jkhkjh => console.log(jkhkjh)
