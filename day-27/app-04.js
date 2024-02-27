// check given string is vowel or not
var txt1 = 'zzzabc';
var rg1 = /[aeiou]/;
console.log(rg1.test(txt1));
// match 3 'a's in give string
var txt2 = 'dfasfssaadaart';
var rg2 = /a{3}/;
console.log(rg2.test(txt2));
// check if given string is cat or dog
var txt3 = 'sgdsfg';
var rg3 = /cat|dog/;
console.log(rg3.test(txt3));
