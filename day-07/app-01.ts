
function sayHello() { //  function defination
    console.log('Hello')
}

sayHello() // function call

var fn = function() {
    console.log(`This is anonomyous function`)
}

fn()

var fn1 = sayHello // refering to sayHello, not call
fn1()
