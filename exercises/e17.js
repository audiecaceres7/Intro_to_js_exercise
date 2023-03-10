export function maxBy (array, cb) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i]) > cb(max)) {
            max = array[i]
        }
    }
    return max
}


export function minBy (array, cb) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i]) < cb(min)) {
            min = array[i]
        }
    }
    return min
}
