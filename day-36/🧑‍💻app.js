const ob1 = {a : 1} // ['a']
const ob2 = {b : 1} // ['b']

console.log(ob1 == ob2) // false
const cnd1 = Object.keys(ob1).length == Object.keys(ob2).length
const cnd2 = Object.keys(ob1).every(key => ob1[key] === ob2[key] )

const arr = Object.keys(ob1)
for( let i = 0; i < arr.length; i++ ) {
    const key = arr[i]
    ob1[key] == ob2[key]
}

console.log(ob1['a'])

console.log('1' == 1)
