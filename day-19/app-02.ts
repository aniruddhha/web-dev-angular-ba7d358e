const arr: string[] = ['abc', 'pqr', 'aaa', 'bbb']
console.log('🟢 Original Array 🟢')

console.log('👉 Push Operation')
const psd = arr.push('123')
console.log(arr)
console.log(psd)

console.log('👉 Unshift Operation')
const uns = arr.unshift('111')
console.log(arr)
console.log(uns == arr.length)

console.log('👉 Pop Operation')
const ppd = arr.pop()
console.log(arr)
console.log(ppd)

console.log('👉 Shift Operation')
const shf = arr.shift()
console.log(arr)
console.log(shf)

