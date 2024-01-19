var a : number | undefined  = 10

// interfaces with optional property
interface Glass {
    color ?: string,
    quality : number
}

var obj1: Glass = { 
    quality: 1
}

var obj2: Glass = { 
    color: "red",
    quality: 1
}