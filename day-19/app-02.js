var arr = ['abc', 'pqr', 'aaa', 'bbb'];
console.log('🟢 Original Array 🟢');
console.log('👉 Push Operation');
var psd = arr.push('123');
console.log(arr);
console.log(psd);
console.log('👉 Unshift Operation');
var uns = arr.unshift('111');
console.log(arr);
console.log(uns == arr.length);
console.log('👉 Pop Operation');
var ppd = arr.pop();
console.log(arr);
console.log(ppd);
console.log('👉 Shift Operation');
var shf = arr.shift();
console.log(arr);
console.log(shf);