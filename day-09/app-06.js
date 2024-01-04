function performTransaction(obj) {
    console.log(obj);
}
performTransaction({ balance: 100, acNo: 'abx123', branch: 'abc', isActive: true });
performTransaction({ acNo: 'abx123', balance: 100, isActive: true, branch: 'abc', });
