var fn = (n: number) => n * n

var fn1: (n: number) => number = (n: number) => n * n



// arrow function or lambda function

function abc() { console.log(`Normal Function`) }

var fn2 = function() { console.log(`Anonymous Function`) }

// es6 => arrow function
var fn3 = () => console.log(`Anonymous Function`)

var fn4: (n: number) => number = function(n: number) {
    return n * n
}

type SpecialFn = (nm : string) => number | string | boolean

var fn5: (nm : string) => number | string | boolean = function(nm: string) {
    if(nm == 'a') return 10
    if(nm == 'b') return nm
    return false
}

var fn6: (nm : string) => number | string | boolean = (jhhfhjfjhg: string) => {
    if(jhhfhjfjhg == 'a') return 10
    if(jhhfhjfjhg == 'b') return jhhfhjfjhg
    return false
}

var fn7: SpecialFn = (nm: string) => 'abc'