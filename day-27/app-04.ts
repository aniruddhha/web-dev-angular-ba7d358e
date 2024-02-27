// check given string is vowel or not
const txt1 = 'zzzabc'
const rg1 = /[aeiou]/
console.log(rg1.test(txt1))

// match 3 'a's in give string
const txt2 = 'dfasfssaadaart'
const rg2 = /a{3}/
console.log(rg2.test(txt2))

// check if given string is cat or dog
const txt3 = 'sgdsfg'
const rg3: RegExp = /cat|dog/
console.log(rg3.test(txt3))

