var _this = this;
var person = {
    fstNm: 'abc',
    lstNm: 'pqr',
    flNm: function () {
        console.log(_this);
        return _this.fstNm + _this.lstNm;
    }
};
person.flNm();
