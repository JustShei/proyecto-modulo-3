function factorial(n) {
    var result = 1
    for (var i = 1; i <= n; i++) result = result * i
    return result
}

console.log(`Factorial Test 1: ${factorial(5)}`)
console.log(`Factorial Test 2: ${factorial(15)}`)
console.log(`Factorial Test 3: ${factorial(0)}`)
console.log(`Factorial Test 4: ${factorial(10)}`)