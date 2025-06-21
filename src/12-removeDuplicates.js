function removeDupes(arr) {
    var unique = []

    for (var i = 0; i < arr.length; i++) {
        var found = false

        for (var j = 0; j < unique.length; j++) {
            if (arr[i] === unique[j]) found = true
        }

        if (found === false) unique.push(arr[i])
    }

    return unique
}

console.log(`Remove Duplicate Test 1: ${removeDupes([1, 2, 2, 3, 1])}`)