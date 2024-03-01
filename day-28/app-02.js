var _a;
var rgx1 = /hello/;
var res1 = rgx1.exec('hello  world');
console.log(res1);
console.log((_a = 'hello world'.match(/o/g)) === null || _a === void 0 ? void 0 : _a.length);
console.log('hello world'.replace(/o/g, 'd'));
console.log('hello world'.search(/hsello/));
