const arr1 = [1, 2, 2, 4] // 1d array

console.log('🟢 2d Array 🟢')
const arr2: number[][] = [ [1, 3], [4, 5], [6, 7]  ] // 2d array
console.log(arr2[0])
console.log(arr2[1])
console.log(arr2[2])

console.log(arr2[0][0])

const arr3: number[][][] = [ 
    [ 
        [1, 2]
    ],
    [
        [2, 4]
    ],
    [ 
        [5, 6] 
    ]
] // 3d array
console.log('🟢 3d Array 🟢')
console.log(arr3[0])
console.log(arr3[0][0])
console.log(arr3[0][0][0])