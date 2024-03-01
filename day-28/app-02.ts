const rgx1: RegExp = /hello/
const res1: RegExpExecArray | null = rgx1.exec('hello  world')
console.log(res1)

console.log('hello world'.match(/o/g)?.length)
console.log('hello world'.replace(/o/g, 'd'))
console.log('hello world'.search(/hsello/))
