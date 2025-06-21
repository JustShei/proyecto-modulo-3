function sumArray(arr) {
    var total = 0
    for (var i = 0; i < arr.length; i++) total = total+arr[i]
    return total
}

console.log(`Sum Array Test 1: ${sumArray([1, 2, 3, 4])}`);
console.log(`Sum Array Test 2: ${sumArray([5, -2, 7])}`);
console.log(`Sum Array Test 3: ${sumArray([100, 200, 300, 400])}`);