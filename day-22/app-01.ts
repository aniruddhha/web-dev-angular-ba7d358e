var nm = 10
const person = {
    fstNm : 'abc',
    lstNm : 'pqr',
    flNm : function () {
    //    return fstNm + lstNm // you need something different
    }
}

function normalFunction() {
    console.log(this)
}

normalFunction()

const fn = function() {
    console.log(this)
}

// fn()

const aro = () => console.log(this)
// aro()
var sadfhskfghlsfkghlksfhglksdfhglksdffhg = 90

// setInterval(() => console.log('hi'), 2000)