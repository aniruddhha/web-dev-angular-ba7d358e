const person = {

    fstNm : 'abc',
    lstNm : 'pqr' ,
    flNm : function () {
        console.log(this)
        return this.fstNm + this.lstNm
    }
}

person.flNm()