interface Car {
    make: string, 
    model : number
}

interface Electric {
    battery : string
}

var ev : Car & Electric = {
    make : '',
    model : 1, 
    battery :'li'
}

// 2018
interface Cart {
    owner : string,
    bitcoin ?: string
}

var ct: Cart = {
    owner: 'abc'
}

if( ct?.bitcoin == 'abx') {
    console.log(`Bitcoin Payments are valid`)
}