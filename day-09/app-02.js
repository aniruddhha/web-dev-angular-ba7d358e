// plain old way : ts
var obj = {
    'speed': 10,
    'color': 'red'
};
console.log("Speed Is ".concat(obj['speed']));
console.log("Speed Is ".concat(obj.speed));
console.log(obj);
obj['speed'] = 10;
obj['speed'] = 'hello';
console.log(obj);
