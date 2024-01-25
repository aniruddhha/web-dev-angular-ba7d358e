// es6
var obj = {
    make: 'abc',
    model: 123
};
// const make: string = obj.make
// const model: number = obj.model
// const make: string = obj['make']
// const model: number = obj['model']
// es6 
var make = obj.make, model = obj.model;
console.log("Make ".concat(make, ", Model ").concat(model));
