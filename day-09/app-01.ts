// plain old way : js
var obj = {
    'speed' : 10,
    'color' : 'red'
}

// plain old way : ts
var obj1: { [key: string]: any } = {
    'speed' : 10,
    'color' : 'red'
}

// obj by using type alias
type MyObj = { [key: string]: any }

var obj2: MyObj = {
    'speed' : 10,
    'color' : 'red'
}

// obj by using interfaces
interface Point {
    x: number,
    y: number
}

var obj3: Point = {
    x : 10,
    y: 20
}