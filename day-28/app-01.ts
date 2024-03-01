const txt1 = `The quick. brown fox. sfdsf abc . mbvmxvbm fox skdjgskjdgh sfjskjfg`
const rgx1: RegExp = /(abc) fox/
const res: RegExpMatchArray | null = txt1.match(rgx1)
console.log(res)

const txt2 = 'abc pqr Start of the line'
const rgx2 = /^Start/
console.log(rgx2.test(txt2))