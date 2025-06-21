function fibonacci(n) {
    var a = 0
    var b = 1

    if (n === 0) return 0

    for (var i = 2; i <= n; i++) {
        var temp = a + b
        a = b
        b = temp
    }

    return b
}

console.log(`Fibonacci Test 1 (Position 0): ${fibonacci(0)}`)
console.log(`Fibonacci Test 2 (Position 1): ${fibonacci(1)}`)
console.log(`Fibonacci Test 3 (Position 2): ${fibonacci(2)}`)
console.log(`Fibonacci Test 4 (Position 5): ${fibonacci(5)}`)
console.log(`Fibonacci Test 5 (Position 8): ${fibonacci(8)}`)