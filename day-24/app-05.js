const obj = {
    a : 10,
    b : 20
 }
//  Object.seal(obj)
Object.freeze(obj)

 obj.c = 90 // no new keys are allowed
 console.log(obj)

 delete obj.c // // no deletion is allowed

 console.log(obj)

 obj.b = 400
 console.log(obj)


