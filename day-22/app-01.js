var _this = this;
var nm = 10;
var person = {
    fstNm: 'abc',
    lstNm: 'pqr',
    flNm: function () {
        //    return fstNm + lstNm // you need something different
    }
};
function normalFunction() {
    console.log(this);
}
normalFunction();
var fn = function () {
    console.log(this);
};
// fn()
var aro = function () { return console.log(_this); };
// aro()
var sadfhskfghlsfkghlksfhglksdfhglksdffhg = 90;
// setInterval(() => console.log('hi'), 2000)
