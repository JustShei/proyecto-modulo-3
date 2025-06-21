function getPrimes(n) {
    var primes = []

    for (var i = 2; i <= n; i++) {
        var isPrime = true

        for (var j = 2; j < i; j++) {
            if (i % j === 0) isPrime = false
        }

        if (isPrime) primes.push(i)
    }

    return primes
}

console.log(`Prime test 1: ${getPrimes(10)}`)
console.log(`Prime test 2: ${getPrimes(120)}`)
console.log(`Prime test 3: ${getPrimes(5)}`)
console.log(`Prime test 4: ${getPrimes(7)}`)
console.log(`Prime test 5: ${getPrimes(92)}`)