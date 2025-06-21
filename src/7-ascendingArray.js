function sortArray(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

console.log(`Sort array test 1: ${sortArray([5, 3, 8, 1, 2])}`)
console.log(`Sort array test 2: ${sortArray([10, -1, 0, 7])}`)
console.log(`Sort array test 3: ${sortArray([2, 1])}`)
console.log(`Sort array test 4: ${sortArray([3, 3, 3, 3, 2])}`)