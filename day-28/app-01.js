var txt1 = "The quick. brown fox. sfdsf abc . mbvmxvbm fox skdjgskjdgh sfjskjfg";
var rgx1 = /(abc) fox/;
var res = txt1.match(rgx1);
console.log(res);
var txt2 = 'abc pqr Start of the line';
var rgx2 = /^Start/;
console.log(rgx2.test(txt2));
