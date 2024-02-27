const em1 = 'aa@dd.com'
const em2 = 'aa@dd'
const em3 = 'aa@dd@ff'

const rg1 = /hello/

const msg1 = `The quick is red`
const rg2 = /quick/
console.log(rg2.test(msg1))

const msg2 = `abc123`
const rg3 = /\d+/
console.log(rg3.test(msg2))

