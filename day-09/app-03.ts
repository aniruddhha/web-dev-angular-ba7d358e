// obj by using type alias
type MyObj = { [key: string]: any }

var obj: MyObj = {
    'speed' : 10,
    'color' : 'red'
}

obj.speed = 20
console.log(obj)

obj.speed = 'hello'
console.log(obj)

obj.lights = 3
console.log(obj)
