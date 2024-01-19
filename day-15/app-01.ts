function printCords(x: number = 0, y: number = 0) {
    console.log(`X = ${x}, Y = ${y}`)
}

printCords()
// printCords(18, 78)

// method with optional parameter
function movePoint(x ?: number, y ?: number) {
    console.log(`X = ${x}, Y = ${y}`)
}

movePoint()
movePoint(10, 89)