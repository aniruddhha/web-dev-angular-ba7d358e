const arr1: [number, string][]  = [
    [1, "abc"], // 0th, 1st
    [2, "pqr"],
    [3, "xyz"]
]

for (let i = 0; i < arr1.length; i++) {

    console.log(arr1[i])
    for (let j = 0; j < arr1[i].length; j++) {
        console.log(arr1[i][j])
    }
}

type ArrDef = number[][] | [[-1],[-1]]
function findPos(str : string):  ArrDef {
    return [[1], [1]]
}

const arr3 = [ [1], [2] ]

console.log(arr3[1][0])
