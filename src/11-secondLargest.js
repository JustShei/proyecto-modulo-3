function findSecondLargest(numbers) {
    var max = numbers[0]
    var second = null

    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            second = max
            max = numbers[i]
        } else if (numbers[i] < max && (second === null || numbers[i] > second)) 
            second = numbers[i]
    }

    return second;
}

console.log(`Second Largest Test 1: ${findSecondLargest([3, 8, 2, 5])}`)
console.log(`Second Largest Test 2: ${findSecondLargest([10, 10, 9, 8])}`)
console.log(`Second Largest Test 3: ${findSecondLargest([1, 2])}`)