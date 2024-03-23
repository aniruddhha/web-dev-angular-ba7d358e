const dt = new Date()
console.log(dt)

const str = `
    Day ${dt.getDay()},
    Month (starts from 0) ${dt.getMonth()},
    Year ${dt.getFullYear()}
`

console.log(str)

dt.setFullYear(2034)
dt.setMonth(2)
dt.setDate(24)

console.log(dt)

const dob = new Date('2020-01-01')
console.log(dob)
console.log(dob.getDate() + 5)
console.log(dob.getMonth() + 2)

dob.setDate(dob.getDate() + 5)
console.log(dob)

const d1 = new Date('2020-01-01')
console.log(d1)
const d2 = new Date('2021-01-01')

console.log(d2-d1)
const monthsDiff = (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth());
console.log(monthsDiff)





