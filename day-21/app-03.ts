const arr = [ 'abc', , 'lmn']

const fst = arr[0]
const snd = arr[1]

const [first, second = 90, third, tenth = 100 ] = arr
console.log(`First ${first}, Second ${second}, Third ${third}, Tenth ${tenth}`)