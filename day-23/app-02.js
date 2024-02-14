const mdl = {
    x : 42, 
    getX : function() {
        return this.x
    }
}

console.log(mdl.getX())

const unbd = mdl.getX
console.log(unbd())

const bnd = mdl.getX.bind(mdl)
console.log(bnd())


function connectToServer(nwid, region, protocol, url, key1, key2, key3 ) {
    return `${url}, ${protocol}, ${key1}, ${key2}, ${key3}, ${nwid}, ${region}`
} 

const dt1 = connectToServer('nw2r2rf', 'a' ,'http','abc.com', 'key28765r', 'key847sjafb', 'key287fhghf')

// west, tcp, vpc1 = tcpWestVpc1

const tcpWestVpc1 = connectToServer.bind(null, 'nw12wfdf', 'west', 'tcp' ) // partial
const dt2 = tcpWestVpc1('pqr.com', 'key7rtw', 'key8sfgjs', 'key9sadfjh')
console.log(dt2)


