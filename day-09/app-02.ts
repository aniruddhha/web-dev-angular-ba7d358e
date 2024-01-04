// plain old way : ts
var obj: { [key: string]: any } = {
    'speed' : 10,
    'color' : 'red'
}

console.log(`Speed Is ${obj['speed']}`)
console.log(`Speed Is ${obj.speed}`)

console.log(obj)
obj['speed'] = 10

obj['speed'] = 'hello'
console.log(obj)

