const str1 = 'abc'

const str2 = `abcdefg`

const str3 = new String(`abc`)

console.log(`Length ${str3.length}`)
console.log(`CharAt ${str2.charAt(2)}`)
console.log(`Slice1 ${str2.slice(6)}`)
console.log(`Slice2 ${str2.slice(6, 10)}`)
console.log(`Substring1 ${str2.substring(6)}`)
console.log(`Substring2 ${str2.substring(6, 10)}`)

console.log(`Slice st > ed ${str2.slice(6, 3)}`) // empty
console.log(`Substring1 st > ed ${str2.substring(6, 3)}`) // swaps indices

console.log(`Negative`)
console.log(str2.slice(-2))
console.log(str2.substring(-2))

console.log(str2.slice(-2, -1))
console.log(`Contact ${str2.concat('-> abc')}`)
console.log(`Contact ${str2.concat(str1)}`)

