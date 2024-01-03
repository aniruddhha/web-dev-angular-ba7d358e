function manage(n1, n2) {
    if (n1 === void 0) { n1 = 1; }
    if (n2 === void 0) { n2 = 1; }
    return n1 / n2;
}
console.log(manage(1, 1));
console.log(manage(10, 2));
console.log(manage(10, 3));
console.log(manage());
console.log(manage(1, 2));
